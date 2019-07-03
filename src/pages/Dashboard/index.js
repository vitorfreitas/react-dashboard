import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Home from './Home';
import Form from './Form';
import TableList from './TableList';
import Feedbacks from './Feedbacks';

const Dashboard = ({ match }) => (
  <Sidebar>
    <Route exact path={match.path} component={Home} />
    <Route path={`${match.path}/form`} component={Form} />
    <Route path={`${match.path}/list`} component={TableList} />
    <Route path={`${match.path}/feedbacks`} component={Feedbacks} />
  </Sidebar>
);

export default Dashboard;
