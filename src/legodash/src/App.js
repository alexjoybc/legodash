import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"

import Header from "./components/Header";
import Home from "./scenes/Home";

function App() {
  return (
    <Router>
      
        <Header></Header>
        <Container fluid>
        <Row>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Row>
      </Container>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
