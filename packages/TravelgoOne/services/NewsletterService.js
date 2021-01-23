import axios from 'axios';
import BaseService from '../../BaseService';

export default class NewsletterService extends BaseService {

  constructor(){
    super('/newsletter');
  }

  sendinblue_createContact(params) {
    return axios.post(`${this.url}/sendinblue/contacts`, params, this.config)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

}