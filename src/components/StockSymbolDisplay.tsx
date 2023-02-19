import styled from 'styled-components';

const StockSymbolDisplay = () => {
  return (
    <div>
      <AlertMessage>Invalid stock symbol!</AlertMessage>
    </div>
  );
};

const AlertMessage = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  padding-top: 3%;
`;
export default StockSymbolDisplay;
