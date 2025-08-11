import React, { useEffect, useState } from 'react';
import styles from'../component/stats.module.css'; 

interface StatProps {
  label: string;
  target: number;
}

const StatBox: React.FC<StatProps> = ({ label, target }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const speed = 200; // Animation speed
    const increment = target / speed;

    const updateCount = () => {
      if (start < target) {
        start += increment;
        setCount(Math.ceil(start));
        setTimeout(updateCount, 30);
      } else {
        setCount(target);
      }
    };

    updateCount();
  }, [target]);

  return (
    <div className={styles.statBox}>
      <div className={styles.statNumber}>{count}</div>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <StatBox label="Members" target={19} />
        <StatBox label="Projects" target={1} />
        <StatBox label="Events" target={5} />
        <StatBox label="Workshops" target={0} />
      </div>
    </section>
  );
};

export default StatsSection;
