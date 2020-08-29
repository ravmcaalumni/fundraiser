import React from 'react';
import {BrowserRouter, Router, Route} from "react-router-dom";
import PaymentRequest from './components/paymentGateway/PaymentRequest';
import PaymentGateway from './components/paymentGateway/PaymentGateway';
import PaymentTransfer from './components/paymentGateway/PaymentTransfer';
import PaymentFrame from './components/screens/PaymentFrame';
import Navbar from './components/screens/Navbar';
import './App.css';

function App() {
  return (
        <BrowserRouter>
          <Route exact path="/">
            {/* <Navbar/> */}
            <PaymentFrame/>
            <PaymentGateway/>
          </Route>
          <Route path="/PaymentRequest">
            <PaymentFrame/>
            <PaymentRequest/>
          </Route>
          <Route path="/PaymentTransfer">
            <PaymentFrame/>
            <PaymentTransfer/>
          </Route>
        </BrowserRouter>
  );
}

export default App;
