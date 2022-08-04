import { Notify } from 'notiflix';
const URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  let chosenCountry = `${URL}${name}?fields=name.official,capital,population,flags.svg,languages`;
  fetch(chosenCountry)
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        refs.list.innerHTML = '';
      }
      if (data.length >= 2 && data.length <= 10) {
        insertContent(data);
      }
      if (data.length === 1) {
        insertUnicItem(data);
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.list.innerHTML = '';
    });

  const createListItem =
    item => `<li><span>${item.chosenCountry.flags.svg}</span>
 ${item.chosenCountry.name.official}
</li>`;
  const createUnicItem =
    item => `<h2><span>${item.chosenCountry.flags.svg}</span>
 ${item.chosenCountry.name.official}</h2>
<p><b>Capital</b>: ${item.chosenCountry.capital}</p>
<p><b>Population</b>: ${item.chosenCountry.population}</p>
<p><b>Languages</b>: ${item.chosenCountry.languages}</p>`;

  const generateUnicItem = array =>
    array ? array.reduce((acc, item) => acc + createUnicItem(item), '') : '';

  const generateContent = array =>
    array ? array.reduce((acc, item) => acc + createListItem(item), '') : '';

  const insertContent = array => {
    const result = generateContent(array);
    refs.list.insertAdjacentHTML('beforeend', result);
  };

  const insertUnicItem = array => {
    const result = generateUnicItem(array);
    refs.divInfo.insertAdjacentHTML('beforeend', result);
  };
}
