import PropTypes from 'prop-types';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
