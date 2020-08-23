import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Detail from './pages/Detail';

function App() {
  return (
  	<React.Fragment>
  		<Header />
  		<main>
	  		<Switch>
	  			<Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/detail.html' component={Detail} />
	    	</Switch>
    	</main>
    	<Footer />
    </React.Fragment>
  );
}


export default App;
