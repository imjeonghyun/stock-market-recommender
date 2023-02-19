import { useState } from 'react';
import Header from '../components/Header';
import StockResult from '../components/StockResult';
import NYSE from '../utils/data/nyse';
import getMockData, { formatDate, StockInformation } from '../utils/getData';

const Main: React.FC<{}> = () => {
  const [stockData, setStockData] = useState<StockInformation[]>([]);
  const [latestPull, setLatestPull] = useState<string>('');
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showAlert, setAlert] = useState<boolean>(false);

  // This function can be changed to pull data from an API
  const pullData = (stockSymbol: string): StockInformation[] => {
    return getMockData(stockSymbol);
  };

  const onGetInformation = (stockSymbol: string) => {
    if (!stockSymbol) {
      setShowResults(false);
      setAlert(false);
      setStockData([]);
      return;
    }

    if (!NYSE.includes(stockSymbol.toUpperCase())) {
      setAlert(true);
      setStockData([]);
      return;
    }

    const pullDate = formatDate(new Date());
    let pulledData: StockInformation[] = [];

    if (
      !stockData.length ||
      stockData[0].symbol !== stockSymbol ||
      latestPull !== pullDate
    ) {
      pulledData = pullData(stockSymbol);

      setStockData(pulledData);
      setLatestPull(pullDate);
    }

    setAlert(false);
    setShowResults(true);
  };

  return (
    <div>
      <Header
        stockSymbol={stockSymbol}
        setStockSymbol={setStockSymbol}
        onGetInformation={onGetInformation}
      />
      {showResults || showAlert ? (
        <StockResult showAlert={showAlert} stockData={stockData} />
      ) : null}
    </div>
  );
};

export default Main;
