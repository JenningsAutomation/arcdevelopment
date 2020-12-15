import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './ui/Header';
import theme from './ui/Theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}/>
          <Route exact path="/services" component={() => <div>Services</div>}/>
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>}/>
          <Route exact path="/website" component={() => <div>Websites</div>}/>
          <Route exact path="/revolution" component={() => <div>The Revolution</div>}/>
          <Route exact path="/about" component={() => <div>About Us</div>}/>
          <Route exact path="/contact" component={() => <div>Contact Us</div>}/>
          <Route exact path="/estimate" component={() => <div>Estimates</div>}/>
          <Route exact path="/mobile" component={() => <div>Mobile App Development</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
}




