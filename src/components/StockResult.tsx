import StockSymbolDisplay from './StockSymbolDisplay';
import StockDataTable from './StockDataTable';

const StockResult: React.FC<{}> = () => {
  return (
    <div>
      <StockSymbolDisplay />
      <StockDataTable />
    </div>
  );
};
export default StockResult;
