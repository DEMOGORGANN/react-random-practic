import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./comnonents/NavBar";
import PageResume from './comnonents/PageResume';
import BlogPage from "./comnonents/BlogPage";
import WorkPage from "./comnonents/WorkPage";
import Contact from "./comnonents/Contact";



import './styles/AppStyles/App.module.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/works" component={WorkPage} />``
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path='/' component={PageResume} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/blog' />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
