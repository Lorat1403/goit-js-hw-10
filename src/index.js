import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { markupContent, cleanMarkup } from './js/renderContent';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;

export const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  divInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput() {
  const inputValue = refs.input.value.trim().toLowerCase();
  if (inputValue === '') {
    cleanMarkup();
    return;
  }
  return fetchCountries(inputValue).then(markupContent).catch(catchError);
}

const catchError = () => {
  Notify.failure('Oops, there is no country with that name');
  cleanMarkup();
};
