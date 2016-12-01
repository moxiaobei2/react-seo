import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Home from 'containers/Home';
import About from 'containers/About';
import List from 'containers/List';
import Test from 'containers/Test';
import Detail from 'containers/Detail.jsx';
import Search from 'containers/Search.jsx'

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="list/:keyword" component={List}/>
        <Route path="test/:test" component={Test}/>
        <Route path="detail/:id" component={Detail} />
        <Route path="search/:keyword" component={Search}/>
    </Route>
  );
};
