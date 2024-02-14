import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatsTitle = styled.h2`
  margin-bottom: 40px;
  margin-top: 0;
  font-size: 50px;
  font-weight: 500;
  text-shadow: 2px 4px 3px rgba(81, 81, 102, 0.81);
  color: #24242a;
`;

export const StatList = styled.ul`
  display: flex;
  width: 800px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  text-decoration: none;
  font-size: 36px;
  color: white;
  font-weight: 600;
  box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.47);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor};
`;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}