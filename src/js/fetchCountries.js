// const URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  const chosenCountry = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  fetch(chosenCountry).then(response => response.json());
}
