import React from 'react';
import {BrowserRouter, Router} from "react-router-dom";
import PaymentFrame from '../screens/PaymentFrame';

const PaymentTransfer = () => {
  return (
      <table className="btn center" border="3" width="500px" height="50px">
          <div class="center dkp-container absolute center">
            <div class="row dbrow"></div>
              <div class="row"><div class="col-xs-12 relative grid">
                  <div class="pay-card">
                  <form action="http://localhost:3000/">
                    <div class="gap"/>
                    <div class="gap"/>
                    <div class="gap"/>
                    <div class="gap"/>      
                    <div class="gap"/>
                    <div class="gap"/>
                    <label for="file">Payment In Progress:</label>
                    <progress id="file" value="32" max="100"> 32% </progress>
                    <div class="gap"/>
                    <div class="gap"/>
                    <div class="gap"/>
                    <div class="gap"/>
                    <div class="gap"/>
                    <div class="gap"/>
                    <div className="col-xs-12 pr-1">
                        <button class="btn center" type="submit">Return</button>
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

export default PaymentTransfer;
