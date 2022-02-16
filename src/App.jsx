import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useReducers } from 'hooks';
import { fetchProjects, fetchEntries } from 'store/actions';
import {
  Navbar,
  Home,
  Skills,
  Blog,
  Projects,
  About,
  Contact,
  Entry
} from 'pages';
import 'styles/App.scss';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { entries } = useReducers('blog');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  React.useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchEntries());
  }, [dispatch]);

  return <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      {entries.map((entry, index) => <Route
        exact
        key={`blog__route-${index}`}
        path={entry.path}
        render={() => <Entry html={entry.html}/>}
      />)}
    </Switch>
    <span className='App__tag--top'>{'<html>'}</span>
    <span className='App__tag--bottom'>{'</html>'}</span>
  </div>
}

export default App;