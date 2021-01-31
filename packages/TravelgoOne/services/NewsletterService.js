import axios from 'axios';
import BaseService from '../../BaseService';

export default class NewsletterService extends BaseService {

  constructor(){
    super('/newsletter');
  }

  getClientIp() {
    // return axios.get("https://ifconfig.co/ip", this.config)
    return axios.get(`/get-client-ip`, this.config)
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  sendinblue_createContact(params) {
    return axios.post(`${this.url}/sendinblue/contacts`, params, this.config)
    .then(response => {console('clientIp', response)
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

}