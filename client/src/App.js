import React from 'react';
//commented out to remove the warnings
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import ProductSummary from './components/ProductSummary/ProductSummary';

class App extends React.Component {
  render() {
    return (
        <>
        <Header/>
        <ProductSummary/>
        </>
    );
  }
}

export default App;
