import { useState } from 'react';
import styled from 'styled-components';
import { socialMediaCount, StockInformation } from '../utils/getData';

type MediaCheck = {
  facebook: boolean;
  twitter: boolean;
  instagram: boolean;
  reddit: boolean;
};

type Props = {
  stockData: StockInformation[];
};

type StockRecommendation = 'Buy' | 'Sell' | 'Hold';

const StockDataTable: React.FC<Props> = (props) => {
  const { stockData } = props;

  const [mediaCount, setMediaCount] = useState<MediaCheck>({
    facebook: true,
    twitter: true,
    instagram: true,
    reddit: true,
  });

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMediaCount({
      ...mediaCount,
      [e.target.id]: e.target.checked,
    });
  };

  const calculateRecommendation = (
    data: StockInformation[],
    currentIndex: number
  ): StockRecommendation => {
    if (currentIndex === 0) return 'Hold';

    const currentPrice = data[currentIndex].price;
    const currentPopularity = getSocialMediaCount(
      data[currentIndex].socialMediaCount
    );

    const averagePriceToDate =
      data
        .slice(0, currentIndex + 1)
        .reduce((acc, currData) => acc + currData.price, 0) / data.length;
    const averagePopularityToDate =
      data
        .slice(0, currentIndex + 1)
        .reduce(
          (acc, currData) =>
            acc + getSocialMediaCount(currData.socialMediaCount),
          0
        ) / data.length;

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

  const getSocialMediaCount = (socialMediaCounts: socialMediaCount): number => {
    const mediaPlatforms = Object.keys(
      socialMediaCounts
    ) as (keyof socialMediaCount)[];

    return mediaPlatforms.reduce((acc, mediaPlatform) => {
      if (mediaCount[mediaPlatform]) {
        return acc + socialMediaCounts[mediaPlatform];
      }

      return acc;
    }, 0);
  };

  return (
    <TableContainer>
      <RecommendTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>
              <div>Social Media Counts</div>
              <SocialMediaCheckBox>
                {(Object.keys(mediaCount) as (keyof MediaCheck)[]).map(
                  (mediaPlatform, idx) => {
                    return (
                      <div key={`${mediaPlatform}${idx}`}>
                        <input
                          type='checkbox'
                          id={mediaPlatform}
                          checked={mediaCount[mediaPlatform]}
                          onChange={handleCheckBoxChange}
                        />
                        <label htmlFor={mediaPlatform}>{mediaPlatform}</label>
                      </div>
                    );
                  }
                )}
              </SocialMediaCheckBox>
            </th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((data, idx) => {
            return (
              <tr key={`${data.symbol}${idx}`}>
                <td>{data.date}</td>
                <td>{data.price}</td>
                <td>{getSocialMediaCount(data.socialMediaCount)}</td>
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

const SocialMediaCheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default StockDataTable;
