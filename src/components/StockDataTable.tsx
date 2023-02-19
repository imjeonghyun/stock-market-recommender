import styled from 'styled-components';
import { StockInformation } from '../utils/getData';

type Props = {
  stockData: StockInformation[];
};

type StockRecommendation = 'Buy' | 'Sell' | 'Hold';

const StockDataTable: React.FC<Props> = (props) => {
  const { stockData } = props;

  const calculateRecommendation = (
    data: StockInformation[],
    currentIndex: number
  ): StockRecommendation => {
    if (currentIndex === 0) return 'Hold';

    const currentPrice = data[currentIndex].price;
    const currentPopularity = data[currentIndex].socialMediaCount;

    const averagePriceToDate =
      data
        .slice(0, currentIndex + 1)
        .reduce((acc, currData) => acc + currData.price, 0) / data.length;
    const averagePopularityToDate =
      data
        .slice(0, currentIndex + 1)
        .reduce((acc, currData) => acc + currData.socialMediaCount, 0) /
      data.length;

    if (
      currentPrice < averagePriceToDate &&
      currentPopularity > averagePopularityToDate
    ) {
      return 'Buy';
    } else if (
      currentPrice > averagePriceToDate &&
      currentPopularity > averagePopularityToDate
    ) {
      return 'Hold';
    } else return 'Sell';
  };

  return (
    <TableContainer>
      <RecommendTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Social Media Counts</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((data, idx) => {
            return (
              <tr>
                <td>{data.date}</td>
                <td>{data.price}</td>
                <td>{data.socialMediaCount}</td>
                <td>{calculateRecommendation(stockData, idx)}</td>
              </tr>
            );
          })}
        </tbody>
      </RecommendTable>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  border-style: box;
  padding: 5%;
`;

const RecommendTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: 12px 15px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
  }

  th {
    background-color: rgb(53, 180, 135);
    color: #ffffff;
  }
`;

export default StockDataTable;
