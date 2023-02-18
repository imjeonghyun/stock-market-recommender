import styled from 'styled-components';
import InfoButton from './InfoButton';
import StockSymbolInput from './StockSymbolInput';
import TimeWindow from './TimeWindow';

const Header: React.FC<{}> = () => {
  return (
    <HeaderContainer>
      <Headline>
        <h1>Stock Market Recommender</h1>
      </Headline>
      <UserContainer>
        <UserInteraction>
          <StockSymbolInput title='Stock Symbol' />
        </UserInteraction>
        <UserInteraction>
          <TimeWindow title='Time Window' />
        </UserInteraction>
        <UserInteraction>
          <InfoButton title='Get Information' />
        </UserInteraction>
      </UserContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5d5555;
  color: white;
`;

const Headline = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
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
