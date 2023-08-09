import {
  StatsSection,
  StatsItem,
  StatsList,
  StatsLabel,
} from './Statistics.styled';

import { getRandomHexColor } from '../Utils/RandomColors';

export const Statistics = ({ title, stats }) => {
  const combinedStats = stats.reduce((acc, curr) => {
    const existingItem = acc.find(item => item.label === curr.label);
    if (existingItem) {
      existingItem.percentage += curr.percentage;
    } else {
      acc.push({ ...curr });
    }
    return acc;
  }, []);

  return (
    <StatsSection>
      {title && <h2>{title}</h2>}
      <StatsList>
        {combinedStats.map(item => (
          <StatsItem key={item.id} color={getRandomHexColor()}>
            <StatsLabel>{item.label}</StatsLabel>
            <span>{item.percentage} %</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};
