import styled from 'styled-components';
import { DEFAULT_DAYS, formatDate } from '../utils/getData';
import InfoButton from './InfoButton';
import StockSymbolInput from './StockSymbolInput';

type Props = {
  stockSymbol: string;
  setStockSymbol: React.Dispatch<React.SetStateAction<string>>;
  onGetInformation: (stockSymbol: string) => void;
};

const Header: React.FC<Props> = (props) => {
  const { stockSymbol, setStockSymbol, onGetInformation } = props;

  const currentDate = formatDate(new Date());
  const oldestDate = formatDate(
    new Date(new Date().getTime() - DEFAULT_DAYS * 24 * 60 * 60 * 1000)
  );

  return (
    <HeaderContainer>
      <Headline>
        <h1>Stock Market Recommender</h1>
      </Headline>
      <TimeWindow>
        {`View stock market recommendations from ${oldestDate} to ${currentDate}`}
      </TimeWindow>
      <UserContainer>
        <UserInteraction>
          <StockSymbolInput
            title='NYSE Stock Symbol'
            stockSymbol={stockSymbol}
            setStockSymbol={setStockSymbol}
          />
        </UserInteraction>
        <UserInteraction>
          <InfoButton
            title='Get Information'
            stockSymbol={stockSymbol}
            onGetInformation={onGetInformation}
          />
        </UserInteraction>
      </UserContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #5d5555;
  color: white;
`;

const Headline = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;

const TimeWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const UserContainer = styled.div`
  @media (min-width: 786px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const UserInteraction = styled.div`
  padding: 0 30px 30px 30px;
`;

export default Header;
