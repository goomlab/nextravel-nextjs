import axios from 'axios';
import BaseService from '../../BaseService';

export default class PracticeService extends BaseService {

  constructor(){
    super('/travelgo-one/practices');
  }

  getClientIp() {
    return axios.get(`/get-client-ip`, this.config)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  createByGuest(postData) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`
      }
    }

    return axios.post(this.url + '/create-by-guest', postData, config)
    .then(response => {
      return Promise.resolve(response);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

}