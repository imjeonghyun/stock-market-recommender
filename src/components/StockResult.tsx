import StockSymbolDisplay from './StockSymbolDisplay';
import StockDataTable from './StockDataTable';
import { StockInformation } from '../utils/getData';

type Props = {
  stockData: StockInformation[];
  showAlert: boolean;
};

const StockResult: React.FC<Props> = (props) => {
  const { stockData, showAlert } = props;

  return (
    <>
      <div>{showAlert && <StockSymbolDisplay />}</div>
      <div>
        {stockData.length ? <StockDataTable stockData={stockData} /> : null}
      </div>
    </>
  );
};

export default StockResult;
