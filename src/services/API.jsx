const APIURL = 'https://rickandmortyapi.com';

export default async (endpoint) => {
  return fetch(`${APIURL}/${endpoint}`)
    .then(response => response.json())
    .catch(error => (error));
};
