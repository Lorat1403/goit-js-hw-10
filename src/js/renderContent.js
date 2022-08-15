import { Notify } from 'notiflix';

const refs = {
  input: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  divInfo: document.querySelector('.country-info'),
};

function createListItem(data) {
  const markup = data
    .map(({ flags, name }) => {
      return `<li><h3><span><img class="mini_images" src=${flags.svg} alt="" wigth="30"></span>
   ${name.official}</h3>
  </li>`;
    })
    .join("");
  refs.list.innerHTML = markup;
}

function createUnicItem(data) {
  const markup = data
    .map(({ flags, name, capital, population, languages }) => {
      return `<h2><span><img class ="unic_image" src=${
        flags.svg
      } alt="" wigth="40"></span>
 ${name.official}</h2>
<p><b>Capital</b>: ${capital}</p>
<p><b>Population</b>: ${population}</p>
<p><b>Languages</b>: ${Object.values(languages)}</p>`;
    })
    .join("");
  refs.divInfo.innerHTML = markup;
}
export function markupContent(data) {
  if (data.length === 1) {
    createUnicItem(data);
  }
  if (data.length >= 2 && data.length <= 10) {
    createListItem(data);
  }
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    cleanMarkup();
  }
}

export function cleanMarkup() {
  refs.list.innerHTML = '';
  refs.divInfo.innerHTML = '';
}
