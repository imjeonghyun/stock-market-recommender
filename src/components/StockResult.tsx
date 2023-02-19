import StockSymbolDisplay from './StockSymbolDisplay';
import StockDataTable from './StockDataTable';
import { StockInformation } from '../utils/getData';

type Props = {
  stockData: StockInformation[];
};

const StockResult: React.FC<Props> = (props) => {
  const { stockData } = props;

  return (
    <>
      {/* <StockSymbolDisplay /> */}
      <StockDataTable stockData={stockData} />
    </>
  );
};
export default StockResult;
