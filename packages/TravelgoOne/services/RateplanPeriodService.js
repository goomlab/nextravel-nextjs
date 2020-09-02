import axios from 'axios';
import BaseService from '../../BaseService';

export default class RateplanPeriodService extends BaseService {

  constructor(){
    super('/travelgo-one/rateplan-periods');
  }

  query(params) {
    return axios.get(`${this.url}/query`, { params }, this.config)
    .then(response => {
      return Promise.resolve(response.data.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

}