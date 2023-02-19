# Stock Market Recommender app

## Overview

Displays stock recommendations for the past 10 days

- Mock data is used in the app with a possibility of redirecting the flow to an actual API call
- Simple Moving Average(SMA) logic is used in order to calculate the stock market recommendation
- Based on NYSE stock symbol data table

## Recommendation logic

- The recommendation result is based on Price and Social Media Counts

  - Referenced 4 Social Media Platforms
    - Facebook
    - Twitter
    - Instagram
    - Reddit

- The recommendation algorithm is based on Simple Moving Average(SMA)
  - SMA is an average of a selected range of prices (closing prices) by the number of periods in that range
    - Formula is following:
      - SMA = (A1 + A2 + ... + An) / n
        - An = the price of an asset at period n
        - n = the number of total periods
    - Two terms have been used for the calculation (the range is adjustable)
      - The short-term: 3 days
      - The long-term: 7 days
    - The condition of Buy/Sell/hold
      - Buy
        - The average price of the short-term is higher than the average price of the long-term as well as the average social media count of the short-term is higher than the average social media count of the long-term
      - Sell
        - The average price of the short-term is lover than the average price of the long-term as well as the average social media count of the short-term is lover than the average social media count of the long-term
      - Hold
        - none of the above

## Structure

- Components:
  - Header
    - Header of the main web-page
  - StockSymbolInput
    - Input box for typing a stock symbol
  - InfoButton
    - Process to display recommendation information regarding stock symbol input
  - StockSymbolAlert
    - Display an alert regarding non-existent stock symbol input
  - StockDataTable
    - Display date, price, social media counts and recommendation of buy/sell/hold
    - Contain recommendation algorithm logic
    - Add/remove social media platforms and recalculate a total of social media counts
  - StockResult
    - A sector for displaying either Alert or stock data table
- Pages:
  - Main
    - Main page of the project
- Utils:
  - Data folder
    - Holds NYSE stock symbol data
  - getData
    - Generates mock data of stock information for price and social media counts

## Result

<img src='./public/StockMarketRecommender.JPG' style='width:100%'/>
