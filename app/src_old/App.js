import React from 'react';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';
import { hot } from 'react-hot-loader';

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, [])
  return ( 
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
)}

export default hot(module)(App);