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

  checkAuthApi(json) {
    let token = Cookies.get('access_token') || null;

    if (token) {
      if (json)
        return {
          headers: {
            // ...API.headers,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      else
        return {
          headers: {
            // ...API.headers,
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          }
        }
    } 
    else {
      if (json) {
        return {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      }
      else {
        return {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
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

  // all(params){
  //   return axios.get(this.url, { params }, this.config)
  //   .then(response => {
  //     return Promise.resolve(response.data.data);
  //   })
  //   .catch(error => {
  //     return Promise.reject(error);
  //   });
  // }
  all(params){
    let config = this.checkAuthApi();
    return axios.get(this.url, {
      params,
      paramsSerializer: function(params) {
        return qs.stringify(params, {
          encode: false
        });
      },
      ...config
    })
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




  search(params){
    let config = this.checkAuthApi();
    return axios.get(this.url, {
      params,
      paramsSerializer: function(params) {
        return qs.stringify(params, {
          encode: false
        });
      },
      ...config
    })
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  load(id){
    let config = this.checkAuthApi();

    return axios.get(`${this.url}/${id}`, config)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  createPost(postData) {
    let config = this.checkAuthApi();

    return axios.post(this.url, postData, config)
      .then(response => {
        return Promise.resolve(response);
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  create(postData) {
    let config = this.checkAuthApi('json');

    return axios.post(this.url, postData, config)
      .then(response => {
        return Promise.resolve(response);
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  update(id, postData) {
    let config = this.checkAuthApi('json');
    config = {
      ...config,
      onUploadProgress: progressEvent => console.log(progressEvent.loaded)
    };
    return axios.put(this.url + '/' + id, postData, config)
      .then(response => {
        return Promise.resolve(response);
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  updatePost(id, postData) {
    let config = this.checkAuthApi();
    postData.append('_method', 'PUT');

    return axios.post(this.url + '/' + id, postData, config)
      .then(response => {
        return Promise.resolve(response);
      }).catch(error => {
        return Promise.reject(error);
      });
  }

  remove(id) {
    let config = this.checkAuthApi();

    return axios.delete(this.url + '/' + id, {
      ...config
    }).then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  updateFields(id, postData) {
    let config = this.checkAuthApi('json');
    // config.headers = {
    //   ...config.headers,
    //   'Content-type' : 'application/form-url-encode'
    // }
    // postData['_method'] = 'PUT';

    return axios.put(this.url + '/update-fields/' + id, postData, config)
    .then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }
}

