import { Notify } from 'notiflix';
import { cleanMarkup } from './renderContent';

export function fetchCountries(name) {
  const chosenCountry = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(chosenCountry).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return response.json();
    }
  });
}
