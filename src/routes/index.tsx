import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../pages/App';

const Root: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
};

export default Root;
