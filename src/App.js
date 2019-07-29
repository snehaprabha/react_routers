import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Test from "./components/test";
import Error from "./components/error";
import Navigation from "./components/Navigation";

class App extends Component {
  render(){
  return (
    <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/test" component={Test} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
  );
  }
}

export default App;
