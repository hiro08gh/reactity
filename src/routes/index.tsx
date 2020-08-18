import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from '../components/MainLayout';

import App from '../pages/App';
import NotFound from '../pages/NotFound';

const Root: React.FC = () => {
  return (
    <MainLayout>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default Root;
