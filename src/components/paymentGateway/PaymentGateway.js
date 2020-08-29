import React from 'react';
import {BrowserRouter, Router} from "react-router-dom";
import PaymentFrame from '../screens/PaymentFrame';

const PaymentGateway = () => {
  return (
          <table className="btn center" border="3" width="500px" height="50px">
            <div class="center">
              <div class="row dbrow"></div>
                <div class="row"><div class="col-xs-12 relative grid">
                  <div class="pay-card">
                  <form action="http://localhost:3000/PaymentRequest">
                      <span class="sm display one-line bold">Billing Information</span>
                      <div class="gap"/>      
                      <span class="sm display one-line bold">Name</span>
                      <input type="text" inputmode="text" border-color="rgb(211, 211, 211); color: rgb(211, 211, 211)" id="payee-name"></input>
                      <div class="gap"/>      
                      <span class="sm display one-line bold">Address</span>
                      <input type="text" inputmode="text" border-color="rgb(211, 211, 211); color: rgb(211, 211, 211)" id="payee-address"></input>
                      <div class="gap"/>      
                      <span class="sm display one-line bold">PAN Number</span>
                      <input type="text" inputmode="text" border-color="rgb(211, 211, 211); color: rgb(211, 211, 211)" id="payee-pan"></input>
                      <div class="gap"/>      
                      <span class="sm display one-line bold">Amount</span>
                      <input type="text" inputmode="text" border-color="rgb(211, 211, 211); color: rgb(211, 211, 211)" id="payee-amount"></input>
                      <div class="gap"/>      
                      <div className="center">
                          <button className="btn btn-primary" type="submit">Verify</button>
                      <div class="gap"/>      
                      </div>
                    </form>   
                  </div>
                </div>           
              </div>
            </div>
          </table>
            
  );
}

export default PaymentGateway;
