import { useState } from 'react';
import Header from '../components/Header';
import StockResult from '../components/StockResult';
import getMockData, { formatDate, StockInformation } from '../utils/getData';

const Main: React.FC<{}> = () => {
  const [allStockData, setAllStockData] = useState<StockInformation[]>([]);
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  // This function can be changed to an API call
  const pullData = (stockSymbol: string): StockInformation[] => {
    return getMockData(stockSymbol);
  };

  const onGetInformation = (stockSymbol: string) => {
    const stockData = pullData(stockSymbol);

    setShowResults(true);
    setAllStockData(stockData);
  };

  return (
    <div>
      <Header
        stockSymbol={stockSymbol}
        setStockSymbol={setStockSymbol}
        onGetInformation={onGetInformation}
      />
      <StockResult />
    </div>
  );
};

export default Main;
