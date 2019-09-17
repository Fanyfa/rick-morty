export default async endpoint => {
  return fetch(`${endpoint}`)
    .then(response => response.json())
    .catch(error => error);
};
