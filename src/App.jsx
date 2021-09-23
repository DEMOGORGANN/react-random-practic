import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./comnonents/NavBar";
import PageResume from './comnonents/PageResume'



import styles from './styles/AppStyles/App.module.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/blog" component={PageResume} />
          <Route exact path='/contact' component={PageResume} />


        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
