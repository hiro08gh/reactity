import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import * as Sentry from '@sentry/browser';
import { history } from './utils/history';

import App from './App';

const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  //google analyticsの初期設定
  ReactGA.initialize(process.env.GOOGLE_ANALYTICS_SECRET);

  history.listen(({ pathname }) => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  });

  //ravenの初期設定
  Sentry.init({ dsn: process.env.RAVEN_SECRET });
}

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
