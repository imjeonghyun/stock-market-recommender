type Props = {
  title: string;
};

const StockSymbol: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div>
      <div>{title}</div>
      <input type='text' />
    </div>
  );
};

export default StockSymbol;
