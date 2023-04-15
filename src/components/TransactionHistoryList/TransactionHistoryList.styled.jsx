import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  border: solid 1px;
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  padding: 10px;
  background-color: #16cf5a;
  border-left: solid 1px black;
`;

export const TableRow = styled.tr`
  :nth-child(odd) {
    background-color: #d3d0d0;
  }

  td {
    padding: 10px;
    border-left: solid 1px black;
  }
`;
