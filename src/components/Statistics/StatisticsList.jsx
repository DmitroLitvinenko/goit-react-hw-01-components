import PropTypes from 'prop-types';

import { StatisticsItem } from './StatisticsItem.jsx';

export const StatisticsList = ({ items, title }) => {
  return (
    <section>
      {title && title.length > 0 && <h2>{title}</h2>}

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <StatisticsItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};
