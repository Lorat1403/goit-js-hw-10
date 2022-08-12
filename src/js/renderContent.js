import { refs } from '../index';
import { Notify } from 'notiflix';

export function markupContent(data) {
  if (data.length === 1) {
    return insertUnicItem(data);
  }
  if (data.length >= 2 && data.length <= 10) {
    return insertContent(data);
  }
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    cleanMarkup();
    return;
  }

  const createListItem = item
    .map(({ flags, name }) => {
      `<li><h3><span><img class="mini_images" src=${flags.svg} alt="" wigth="30"></span>
   ${name.official}</h3>
  </li>`;
    })
    .join();
  const createUnicItem = item
    .map(({ flags, name, capital, population, languages }) => {
      `<h2><span><img class ="unic_image" src=${
        flags.svg
      } alt="" wigth="40"></span>
 ${name.official}</h2>
<p><b>Capital</b>: ${capital}</p>
<p><b>Population</b>: ${population}</p>
<p><b>Languages</b>: ${Object.values(languages)}</p>`;
    })
    .join();

  const insertContent = array => {
    const result = createListItem(array);
    refs.list.insertAdjacentHTML('beforeend', result);
  };

  const insertUnicItem = array => {
    const result = createUnicItem(array);
    refs.divInfo.insertAdjacentHTML('beforeend', result);
  };
}

export function cleanMarkup() {
  refs.list.innerHTML = '';
  refs.divInfo.innerHTML = '';
}
