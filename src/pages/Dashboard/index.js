import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Home from './Home';

const Dashboard = () => (
  <Sidebar>
    <Route path="/" component={Home} />
  </Sidebar>
);

export default Dashboard;
