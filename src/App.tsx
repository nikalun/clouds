import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { Nav } from "./components/Nav";
import { Quotes } from "./pages/Quotes";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/quotes" component={Quotes} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
