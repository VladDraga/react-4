import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((item, index) => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: getColorByIndex(index) }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const getColorByIndex = (index) => {
  const colors = [
    '#4ECDC4',
    '#9B59B6',
    '#E74C3C',
    '#1ABC9C',
  ];
  return colors[index % colors.length];
};

export default Statistics;
