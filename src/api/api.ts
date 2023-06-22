import axios from 'axios';

const api = axios.create({
  baseURL: 'https://andraerp-backend-sp-dev-vagas.rj.r.appspot.com',
 

});


export default api;