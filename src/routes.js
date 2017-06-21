import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TabIndex from './components/tab_index';
import TabAbout from './components/tab_about';
import TabShopping from './components/tab_shopping';
import TabProposal from './components/tab_proposal';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TabIndex} />
    <Route path="/about" component={TabAbout} />
    <Route path="/shopping" component={TabShopping} />
    <Route path="/proposal" component={TabProposal} />
  </Route>
);
