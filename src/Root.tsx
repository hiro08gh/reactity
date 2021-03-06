import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/MainLayout';
import { App } from './pages/App';
import { NotFound } from './pages/NotFound';

export const Root: React.VFC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </MainLayout>
  );
};
