class Freecurrencyapi {
  baseUrl = 'https://api.freecurrencyapi.com/v1/';

  constructor(apiKey = '') {
      this.headers = {
          apikey: apiKey
      };
  }

  call (endpoint, params = {}) {
      const paramString = new URLSearchParams({
          ...params
      }).toString();

      return fetch(`${this.baseUrl}${endpoint}?${paramString}`, { headers: this.headers })
          .then(response => response.json())
          .then(data => {
              return data;
          });
  }

  status () {
      return this.call('status');
  }

  currencies (params) {
      return this.call('currencies', params);
  }

  latest (params) {
      return this.call('latest', params);
  }

  historical (params) {
      return this.call('historical', params);
  }

};const freecurrencyapi = new Freecurrencyapi('fca_live_EPuTp44U5lcBUCpwnfCtYenOK4kh5tSqANzEk2Kc');

let convert = document.querySelector("#convert")
let fromCurrency = document.querySelector("#fromCurrency")
let toCurrency = document.querySelector("#toCurrency")
let toInput = document.querySelector("#toInput");
let fromCurrencyValue, toCurrencyValue, fromInput, newValue;

convert.addEventListener('click', () => {
  fromInput = document.getElementById("fromInput").value;
  fromCurrencyValue = fromCurrency.options[fromCurrency.selectedIndex].value;
  toCurrencyValue = toCurrency.options[toCurrency.selectedIndex].value;
  toInput.value = '';
  freecurrencyapi.latest({
    base_currency: toCurrencyValue,
    currencies: fromCurrencyValue
  }).then(response => {
    newValue = fromInput*response.data[fromCurrencyValue];
    newValue = (newValue).toFixed(2)
    toInput.value = newValue;
  });
});

