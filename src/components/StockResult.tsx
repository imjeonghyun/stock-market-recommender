import StockSymbolAlert from './StockSymbolAlert';
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
      {showAlert && (
        <div>
          <StockSymbolAlert />
        </div>
      )}
      {stockData.length ? (
        <div>
          <StockDataTable stockData={stockData} />
        </div>
      ) : null}
    </>
  );
};

export default StockResult;
