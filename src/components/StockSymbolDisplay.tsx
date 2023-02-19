import styled from 'styled-components';

const StockSymbolDisplay: React.FC<{}> = () => {
  return (
    <>
      <AlertMessage>Invalid stock symbol!</AlertMessage>
    </>
  );
};

const AlertMessage = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  padding-top: 3%;
`;
export default StockSymbolDisplay;
