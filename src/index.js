import React from "react";
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./components/main";
import Filter from "./components/filter";
import Mypage from "./components/mypage";
import Temp from "./components/temp_filter";

const App = () => (
  <HashRouter>
    <Switch>
      <Route path="/filter" component = {Filter} />
      <Route path="/visual" component = {Temp} />
      <Route exact path="/" component = {Main}/>
      <Route path="/mypage" component = {Mypage} />
      {/* <Route path="/temp" component = {Temp} /> */}
    </Switch>
  </HashRouter>
);

render(<App />, document.getElementById('root'));