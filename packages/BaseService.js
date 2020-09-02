import axios from 'axios';

export default class BaseService {

  constructor(url){
    this.url = `${process.env.api_url}` + ((url) ? url : '');
    this.config = {
      headers: {
        // API_KEY: '$2y$10$zgrnhniFfgWCIkTqUNmBJeJkre2AY3s7FXf8EIqdSzFodKK3uM7Jy',
      }
    }
  }

  initApp(){
    return axios.get(this.url + '/travelgo-one/frontend/initialize', this.config)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  all(params){
    return axios.get(this.url, { params }, this.config)
    .then(response => {
      return Promise.resolve(response.data.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  get(id){
    return axios.get(`${this.url}/${id}`, this.config)
    .then(response => {
      return Promise.resolve(response.data.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  getBySlug(slug){
    return axios.get(`${this.url}/by-slug/${slug}`, this.config)
    .then(response => {
      return Promise.resolve(response.data.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }
}

