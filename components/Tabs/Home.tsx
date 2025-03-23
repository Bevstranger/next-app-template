import React from 'react';
import classes from '../HeaderTabs.module.css';

const Home = () => {
  return (
    <div className={classes.tabContent}>
      <h1>Главная</h1>
      <p>This is the orders page.</p>
    </div>
  );
};

export default Home;
