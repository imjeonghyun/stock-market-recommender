import { DEFAULT_DAYS } from './constants';

export interface StockInformation {
  symbol: string;
  date: string;
  price: number;
  socialMediaCount: number;
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

const numberRandomizer = (
  lowestCount: number,
  highestCount: number
): number => {
  return Math.random() * highestCount + lowestCount;
};

const generateRandomPrice = (): number => {
  const lowestPrice = 10;
  const highestPrice = 300;

  return parseFloat(numberRandomizer(lowestPrice, highestPrice).toFixed(2));
};

const generateRandomSocialMediaCounts = (): number => {
  const lostSocialMediaCount = 100;
  const highestSocialMediaCount = 5000;

  return Math.round(
    numberRandomizer(lostSocialMediaCount, highestSocialMediaCount)
  );
};

const generateMockDataPerDate = (
  stockSymbol: string,
  date: Date
): StockInformation => {
  return {
    symbol: stockSymbol,
    date: formatDate(date),
    price: generateRandomPrice(),
    socialMediaCount: generateRandomSocialMediaCounts(),
  };
};

const getMockData = (stockSymbol: string): StockInformation[] => {
  const stockInformation: StockInformation[] = [];
  let generationDate = new Date(
    new Date().getTime() - 10 * 24 * 60 * 60 * 1000
  );

  for (let i = DEFAULT_DAYS; i >= 0; i--) {
    const dateData = generateMockDataPerDate(stockSymbol, generationDate);
    stockInformation.push(dateData);

    generationDate.setDate(generationDate.getDate() + 1);
  }

  return stockInformation;
};

export default getMockData;