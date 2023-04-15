import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 25px;
  }
`;
