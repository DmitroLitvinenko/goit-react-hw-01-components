import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #d6d6d6;
  padding: 8px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 40px;
  p {
    padding: 0;
    margin: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
  background-color: #ecebeb;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px;
  }
`;
