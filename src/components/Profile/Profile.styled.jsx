import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f4fa;
  padding: 8px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
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
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 11px;
  }
`;
