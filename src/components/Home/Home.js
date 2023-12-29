import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../Store/auth-context';

const Home = (props) => {
  const athCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={athCtx.onLogout}>Logout</button>
    </Card>
  );
};

export default Home;
