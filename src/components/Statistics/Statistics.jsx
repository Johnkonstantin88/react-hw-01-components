import PropTypes from 'prop-types';
import { ListItem, Section, StatList, StatsTitle } from './Statisticts.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ListItem key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </ListItem>
          );
        })}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
