import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./comnonents/NavBar";
import PageResume from './comnonents/PageResume';
import BlogPage from "./comnonents/BlogPage";


import styles from './styles/AppStyles/App.module.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path='/contact' component={PageResume} />
          {/* <Redirect to='/blog' /> */}
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
