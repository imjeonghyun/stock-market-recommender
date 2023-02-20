export const DEFAULT_DISPLAY_DAYS = 10;
export const DEFAULT_PULL_DAYS = DEFAULT_DISPLAY_DAYS + 7;

export interface socialMediaCount {
  facebook: number;
  twitter: number;
  instagram: number;
  reddit: number;
}

export interface StockInformation {
  symbol: string;
  date: string;
  price: number;
  socialMediaCount: socialMediaCount;
}

export const formatDate = (date: Date): string => {
  // Convert date to MM/dd/yyyy format
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
    socialMediaCount: {
      facebook: generateRandomSocialMediaCounts(),
      twitter: generateRandomSocialMediaCounts(),
      instagram: generateRandomSocialMediaCounts(),
      reddit: generateRandomSocialMediaCounts(),
    },
  };
};

const getMockData = (stockSymbol: string): StockInformation[] => {
  const stockInformation: StockInformation[] = [];
  let generationDate = new Date(
    new Date().getTime() - DEFAULT_PULL_DAYS * 24 * 60 * 60 * 1000
  );

  for (let i = DEFAULT_PULL_DAYS; i >= 0; i--) {
    const dateData = generateMockDataPerDate(stockSymbol, generationDate);
    stockInformation.push(dateData);

    generationDate.setDate(generationDate.getDate() + 1);
  }

  return stockInformation;
};

export default getMockData;
