import PropTypes from 'prop-types';

import { StatisticsItem } from '../StatisticsItem/StatisticsItem.jsx';
import { Container, List } from './StatisticsList.styled.jsx';
import { randomHex } from 'randomize-hex';

export const StatisticsList = ({ items, title }) => {
  return (
    <Container>
      {title && title.length > 0 && <h2>{title}</h2>}

      <List>
        {items.map(item => (
          <li key={item.id} style={{ backgroundColor: randomHex() }}>
            <StatisticsItem item={item} />
          </li>
        ))}
      </List>
    </Container>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};
