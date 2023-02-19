import { queryByAttribute, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { StockInformation } from '../utils/getData';
import StockDataTable from './StockDataTable';

describe('StockDataTable', () => {
  const mockStockData: StockInformation[] = [
    {
      symbol: 'A',
      date: '02/02/2023',
      price: 54.92,
      socialMediaCount: {
        facebook: 3338,
        twitter: 4813,
        instagram: 909,
        reddit: 2000,
      },
    },
    {
      symbol: 'A',
      date: '02/03/2023',
      price: 262.15,
      socialMediaCount: {
        facebook: 4101,
        twitter: 4905,
        instagram: 1722,
        reddit: 3530,
      },
    },
    {
      symbol: 'A',
      date: '02/04/2023',
      price: 39.62,
      socialMediaCount: {
        facebook: 2615,
        twitter: 4918,
        instagram: 4578,
        reddit: 1360,
      },
    },
    {
      symbol: 'A',
      date: '02/05/2023',
      price: 14.43,
      socialMediaCount: {
        facebook: 2965,
        twitter: 370,
        instagram: 3406,
        reddit: 4487,
      },
    },
    {
      symbol: 'A',
      date: '02/06/2023',
      price: 37.53,
      socialMediaCount: {
        facebook: 4928,
        twitter: 3981,
        instagram: 1925,
        reddit: 1405,
      },
    },
    {
      symbol: 'A',
      date: '02/07/2023',
      price: 53.1,
      socialMediaCount: {
        facebook: 2569,
        twitter: 3267,
        instagram: 415,
        reddit: 734,
      },
    },
    {
      symbol: 'A',
      date: '02/08/2023',
      price: 292.33,
      socialMediaCount: {
        facebook: 1164,
        twitter: 1257,
        instagram: 1993,
        reddit: 2029,
      },
    },
    {
      symbol: 'A',
      date: '02/09/2023',
      price: 112.46,
      socialMediaCount: {
        facebook: 2523,
        twitter: 801,
        instagram: 4851,
        reddit: 2168,
      },
    },
    {
      symbol: 'A',
      date: '02/10/2023',
      price: 74.48,
      socialMediaCount: {
        facebook: 2609,
        twitter: 275,
        instagram: 4353,
        reddit: 5061,
      },
    },
    {
      symbol: 'A',
      date: '02/11/2023',
      price: 123.63,
      socialMediaCount: {
        facebook: 747,
        twitter: 978,
        instagram: 1257,
        reddit: 3401,
      },
    },
    {
      symbol: 'A',
      date: '02/12/2023',
      price: 85.45,
      socialMediaCount: {
        facebook: 3596,
        twitter: 2997,
        instagram: 1963,
        reddit: 2978,
      },
    },
    {
      symbol: 'A',
      date: '02/13/2023',
      price: 277.73,
      socialMediaCount: {
        facebook: 2171,
        twitter: 4946,
        instagram: 2302,
        reddit: 1396,
      },
    },
    {
      symbol: 'A',
      date: '02/14/2023',
      price: 160.87,
      socialMediaCount: {
        facebook: 1071,
        twitter: 3030,
        instagram: 3258,
        reddit: 1926,
      },
    },
    {
      symbol: 'A',
      date: '02/15/2023',
      price: 18.87,
      socialMediaCount: {
        facebook: 2425,
        twitter: 1310,
        instagram: 1811,
        reddit: 490,
      },
    },
    {
      symbol: 'A',
      date: '02/16/2023',
      price: 217.65,
      socialMediaCount: {
        facebook: 1471,
        twitter: 4244,
        instagram: 1077,
        reddit: 2823,
      },
    },
    {
      symbol: 'A',
      date: '02/17/2023',
      price: 83.24,
      socialMediaCount: {
        facebook: 919,
        twitter: 2953,
        instagram: 2660,
        reddit: 808,
      },
    },
    {
      symbol: 'A',
      date: '02/18/2023',
      price: 102.7,
      socialMediaCount: {
        facebook: 1879,
        twitter: 643,
        instagram: 2985,
        reddit: 3104,
      },
    },
    {
      symbol: 'A',
      date: '02/19/2023',
      price: 271.04,
      socialMediaCount: {
        facebook: 452,
        twitter: 4223,
        instagram: 4266,
        reddit: 2962,
      },
    },
  ];

  test('renders table with stock data', () => {
    render(<StockDataTable stockData={mockStockData} />);

    expect(screen.getByText('02/10/2023')).toBeInTheDocument();
    expect(screen.getByText('02/19/2023')).toBeInTheDocument();
    expect(screen.getByText('74.48')).toBeInTheDocument();
    expect(screen.getByText('271.04')).toBeInTheDocument();
  });

  test('handles checkbox change', () => {
    render(<StockDataTable stockData={mockStockData} />);
    const facebookCheckbox = screen.getByLabelText('facebook');
    const twitterCheckbox = screen.getByLabelText('twitter');
    const instagramCheckbox = screen.getByLabelText('instagram');
    const redditCheckbox = screen.getByLabelText('reddit');

    expect(facebookCheckbox).toBeChecked();
    expect(twitterCheckbox).toBeChecked();
    expect(instagramCheckbox).toBeChecked();
    expect(redditCheckbox).toBeChecked();

    userEvent.click(facebookCheckbox);
    expect(facebookCheckbox).not.toBeChecked();
    expect(twitterCheckbox).toBeChecked();
    expect(instagramCheckbox).toBeChecked();
    expect(redditCheckbox).toBeChecked();
  });

  test('calculates stock recommendations', () => {
    const { container } = render(<StockDataTable stockData={mockStockData} />);
    const getById = queryByAttribute.bind(null, 'id');

    const recommendationCells = getById(container, 'A0');
    expect(recommendationCells).toHaveTextContent('Hold');
  });
});
