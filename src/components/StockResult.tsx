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
    <div>
      {showAlert && <StockSymbolDisplay />}
      {stockData.length && <StockDataTable stockData={stockData} />}
    </div>
  );
};

export default StockResult;
