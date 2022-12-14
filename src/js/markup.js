export function createMurkup({ name, capital, population, flags, languages }) {
  return `<ul> 
      <h2><img src="${flags.svg}" alt="${flags}" width="75">${name}</h2>
      <li>Capital: ${capital}</li>
      <li>Population: ${population}</li>
      <li>Languags: ${languages[0].name}</li>
    </ul>`;
}

export function createListMurkup(name, flags) {
  return `<li><h2><img src="${flags}" alt="${flags}" width="25">${name}</h2></li>`;
}
