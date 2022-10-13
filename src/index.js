import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMurkup, createListMurkup } from './js/markup';
import { fetchCountries } from './js/fetch';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input');
const countryInfoRef = document.querySelector('.country-info');
const listCountryRef = document.querySelector('.country-list');

inputRef.addEventListener('input', inputHandler);

function inputHandler(e) {
  console.log(e.currentTarget.value);
  let country = e.target.value.trim().toLowerCase();
  if (!country) {
  }
  console.log();
  fetchCountries(country)
    .then(data => {
      listCountryRef.innerHTML = '';
      countryInfoRef.innerHTML = '';
      if (data.length > 10) {
        Notify.info('to many results, plaese input more data');
      }
      if ((data.length >= 2) & (data.length <= 10)) {
        data.forEach(({ name, flags }) => {
          const markup = createListMurkup(name, flags.svg);
          listCountryRef.insertAdjacentHTML('beforeend', markup);
        });
      } else {
        const markup = createMurkup(...data);
        countryInfoRef.innerHTML = markup;
      }
    })
    .catch(error => {
      listCountryRef.innerHTML = '';
      countryInfoRef.innerHTML = '';
      Notify.failure('НЕМА ТАКОЇ КРАЇНИ');
    });
}
