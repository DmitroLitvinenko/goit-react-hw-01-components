export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
};
