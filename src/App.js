//Core
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
//Style
import './App.css';
//Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';
//Store
import { store } from "./engine/init/store";

function App() {
    const dispatch = store.dispatch;

  return (
        <Provider store={store}>
          <div className="App">
            <Header />
              <Router>
                  <div>
                      <nav>
                          <ul>
                              <li>
                                  <Link to="/">Home</Link>
                              </li>
                              <li>
                                  <Link to="/done">Done</Link>
                              </li>
                              <li>
                                  <Link to="/notdone">NotDone</Link>
                              </li>
                          </ul>
                      </nav>

                      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                      <Switch>
                          <Route path="/done">
                              <Main actions = "getDone" />
                          </Route>
                          <Route path="/notdone">
                              <Main actions = "getNotDone" />
                          </Route>
                          <Route path="/">
                              <Main actions = "getRequest" />
                          </Route>
                      </Switch>
                  </div>
              </Router>
            <Footer />
          </div>
        </Provider>
  );
}

export default App;
