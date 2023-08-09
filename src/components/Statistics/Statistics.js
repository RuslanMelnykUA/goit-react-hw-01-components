import PropTypes from 'prop-types';
import {
  StatsSection,
  StatsItem,
  StatsList,
  StatsLabel,
} from './Statistics.styled';

import { getRandomHexColor } from '../Utils/RandomColors';

export const Statistics = ({ title, stats }) => {  
  return (
    <StatsSection>
      {title && <h2>{title}</h2>}
      <StatsList>
        {stats.map(item => (
          <StatsItem key={item.id} color={getRandomHexColor()}>
            <StatsLabel>{item.label}</StatsLabel>
            <span>{item.percentage} %</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};