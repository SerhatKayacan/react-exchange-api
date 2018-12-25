import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = { result: null, z: null };
  getResult = async () => {
    if (this.para1 === this.para2) {
      this.setState({ result: this.miktar });
    } else {
      let url = "https://api.exchangeratesapi.io/latest?base=";
      let response = await fetch(`${url}${this.para1}`);

      let response2 = await response.json();
      console.log(response2);

      let parity = response2.rates[this.para2];
      let result = this.miktar * parity;
      this.setState({ result: result });
    }
    this.setState({ z: " is equal to " });
  };
  v = e => {
    e.preventDefault();
    this.miktar = document.getElementById("miktar").value;
    this.para1 = document.getElementById("para1").value;
    this.para2 = document.getElementById("para2").value;
    this.getResult();
  };

  render() {
    return (
      <div>
        <div id="çerçeve">
          <div className="içerik_react">
            <div className="container" id="s">
              <h3>Currency Converter</h3>
              <div className="row">
                <div id="render">
                  <input type="number" placeholder="Miktar" id="miktar" />
                  <select className="custom-select" id="para1">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                    <option value="BGN">BGN</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="GBP">GBP</option>
                    <option value="HUF">HUF</option>
                    <option value="PLN">PLN</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="CHF">CHF</option>
                    <option value="ISK">ISK</option>
                    <option value="NOK">NOK</option>
                    <option value="HRK">HRK</option>
                    <option value="RUB">RUB</option>
                    <option value="TRY">TRY</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CNY">CNY</option>
                    <option value="HKD">HKD</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="KRW">KRW</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NZD">NZD</option>
                    <option value="PHP">PHP</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="ZAR">ZAR</option>
                  </select>
                  <select className="custom-select" id="para2">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="JPY">JPY</option>
                    <option value="BGN">BGN</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="GBP">GBP</option>
                    <option value="HUF">HUF</option>
                    <option value="PLN">PLN</option>
                    <option value="RON">RON</option>
                    <option value="SEK">SEK</option>
                    <option value="CHF">CHF</option>
                    <option value="ISK">ISK</option>
                    <option value="NOK">NOK</option>
                    <option value="HRK">HRK</option>
                    <option value="RUB">RUB</option>
                    <option value="TRY">TRY</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CAD">CAD</option>
                    <option value="CNY">CNY</option>
                    <option value="HKD">HKD</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="KRW">KRW</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NZD">NZD</option>
                    <option value="PHP">PHP</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="ZAR">ZAR</option>
                  </select>
                  <button onClick={this.v}>result</button>
                </div>

                <div id="sonuc">
                  {this.miktar} {this.para1}
                  {this.state.z}
                  {this.state.result} {this.para2}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
