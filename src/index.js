import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createMurkup } from './js/markup';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('input');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', inputHandler);

function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        Notify.failure('please input country name');
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const markup = createMurkup(...data);
      countryInfoRef.innerHTML = markup;
    })
    .catch(error => {
      console.log(error);
    });
}

function inputHandler(e) {
  console.log(e.currentTarget.value);
  let country = e.target.value.trim().toLowerCase();
  if (!country) {
  }
  fetchCountries(`${country}`);
}
