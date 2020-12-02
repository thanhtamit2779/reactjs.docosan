import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import ListRouting from './routes';
const App = () => <Router>
  <React.Suspense fallback={<div />}>
    <Switch>
      <ListRouting />
    </Switch>
  </React.Suspense>
</Router>
export default App;