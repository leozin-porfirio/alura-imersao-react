const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://porfirioflix.herokuapp.com';

export default {
  URL,
};
