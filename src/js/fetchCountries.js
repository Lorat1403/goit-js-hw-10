import { Notify } from 'notiflix';
import { cleanMarkup } from './renderContent';

export function fetchCountries(name) {
  const chosenCountry = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(chosenCountry)
    .then(response => response.json())
    .catch(error => {
      if (error === 'Error 404') {
        Notify.failure('Oops, there is no country with that name');
      }
    });
}
