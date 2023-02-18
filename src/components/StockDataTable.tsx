import styled from 'styled-components';

const StockDataTable = () => {
  return (
    <TableContainer>
      <RecommendTable>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Social Media Counts</th>
            <th>Rating</th>
            <th>Recommendation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
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
