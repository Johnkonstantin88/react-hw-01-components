import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
  width: 900px;
  margin-bottom: 60px;
  font-size: 30px;
  box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.47);
`;

export const TableHead = styled.thead`
  padding: 0;
  margin: 0;
  text-align: start;
  background: linear-gradient(
    189deg,
    rgba(0, 208, 226, 1) 0%,
    rgba(51, 211, 223, 1) 39%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const Thead = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 80px;
  color: #8e8e8e;
`;

export const TableItem = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 52px;
  color: #3a3f60;
  background-color: ${props =>
    props.$idx % 2 === 0
      ? 'linear-gradient(90deg, rgba(157,192,194,1) 0%, rgba(249,249,249,1) 100%)'
      : 'aliceblue'};
`;

export const TheadItem = styled.th`
  text-align: center;
  width: 300px;
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

export const TbodyItem = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
`;
