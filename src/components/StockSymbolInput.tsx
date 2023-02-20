type Props = {
  title: string;
  stockSymbol: string;
  setStockSymbol: React.Dispatch<React.SetStateAction<string>>;
};

const StockSymbol: React.FC<Props> = (props) => {
  const { title, stockSymbol, setStockSymbol } = props;

  const onTypeStockSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;

    setStockSymbol(newValue.toUpperCase());
  };

  return (
    <>
      <div>{title}</div>
      <input type='text' value={stockSymbol} onChange={onTypeStockSymbol} />
    </>
  );
};

export default StockSymbol;
