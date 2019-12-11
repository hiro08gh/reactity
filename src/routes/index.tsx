import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../components/MainLayout';
import App from '../pages/App';

const Root: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </MainLayout>
  );
};

export default Root;
