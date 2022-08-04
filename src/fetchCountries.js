import { Notify } from 'notiflix';

const URL =
  'https://restcountries.com/v3.1/name?fields=name.official,capital,population,flags.svg,languages';

export function fetchCountries(e) {
  e.preventDefault();
  fetch(URL)
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
      if (data.length == 1) {
        insertUnicItem(data);
      }
      console.log('data', data);
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.list.innerHTML = '';
    });
}

const createListItem = item => `<li><span>${item.URL.flags.svg}</span>
 ${item.URL.name.official}
</li>`;
const createUnicItem = item => `<li>
<p><b>Capital</b>: ${item.URL.capital}</p>
<p><b>Population</b>: ${item.URL.population}</p>
<p><b>Languages</b>: ${item.URL.languages}</p></li>`;

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
  refs.list.insertAdjacentHTML('beforeend', result);
};
