import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/detail.html" component={Detail} />
        </Switch>
      </main>
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
