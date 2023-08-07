import styled from 'styled-components';

export const StatsSection = styled.section`
  text-align: center;
  width: 800px;
  border: 1px solid black;
  margin: 40px 20px;
`;
export const StatsList = styled.ul`
  height: 45px;
  display: flex;
  justify-content: space-around;
  flex: 1;
`;
export const StatsItem = styled.li`
  background-color: ${props => props.color};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
export const StatsLabel = styled.span`
  margin-right: 5px;
  font-weight: 600;
`;
