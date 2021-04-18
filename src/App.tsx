import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Navs } from "./components/Navs";
import { Quotes } from "./pages/Quotes";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navs />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/quotes/:path" render={({ match: { params : { path }}}) => <Quotes path={path} />} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
