import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllPlanetsPage from './pages/AllPlanetsPage';
import PlanetPage from './pages/PlanetPage';

const App = () => {
  // cделал роутинг страниц
  return (
    <Router>
      <Switch>
        <Route path="/" component={AllPlanetsPage} exact />
        <Route path="/planet/:id" component={PlanetPage} exact />
      </Switch>
    </Router>
  )
}

export default App

