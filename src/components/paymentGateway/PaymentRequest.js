import React from 'react';
import {BrowserRouter, Router} from "react-router-dom";
import PaymentFrame from '../screens/PaymentFrame';

const PaymentRequest = () => {
  return (
  <table className="btn center" border="3" width="500px" height="50px">
  <div className="center"> {/* dkp-container absolute center"> */}
    <div className="row dbrow"></div>
      <div className="row"><div class="col-xs-12 relative grid">
          <div className="pay-card">
            <form action="http://localhost:3000/PaymentTransfer">
              <div className="gap"/>
              <div class="gap"/>      
              <div class="gap"/>      
              <div class="gap"/> 
              <div class="gap"/>   
              <div>
                      <span class="sm display one-line bold">Pay Using QR Code</span>
              </div>  
              <div class="gap"/>    
              <img src="./QR.png" alt="QR Code"/>
              <div class="gap"/>
              <span class="sm display one-line bold">Pay Using UPI ID</span>
              <div class="gap"/>
              <input type="text" inputmode="text" border-color="rgb(211, 211, 211); color: rgb(211, 211, 211)" id="upi-input"></input>
              <div className="gap"/>
              <div class="gap"/>      
              <div class="gap"/>      
              <div class="gap"/>    
              <div className="center">
                  <button className="btn btn-primary" type="submit">Pay</button>
              </div>
              <div class="gap"/>      
            </form>
          </div>
      </div>
    </div>
  </div>
  </table>
  );
}

export default PaymentRequest;