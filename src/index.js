import './css/styles.css';
import { fetchCountries } from './fetchCountries';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search - box'),
  list: document.querySelector('.country-list'),
  divInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  const inputValue = refs.input.value.trim();
  if (inputValue === '') {
    refs.list.innerHTML = '';
    return;
  }
  fetchCountries(inputValue);
}
