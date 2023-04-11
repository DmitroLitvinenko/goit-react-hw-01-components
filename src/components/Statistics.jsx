export const Statistics = ({ data: { label, percentage } }) => {
  return (
    <section>
      <h2>Upload stats</h2>

      <ul>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
        <li>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      </ul>
    </section>
  );
};
