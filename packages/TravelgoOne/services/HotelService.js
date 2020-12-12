import axios from 'axios';
import BaseService from '../../BaseService';

export default class HotelService extends BaseService {

  constructor(){
    super('/travelgo-one/hotels');
  }

  query(params) {
    return axios.get(`${this.url}/query`, { params }, this.config)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
  }

  // queryLastminutes(id, params) {
  //   return axios.get(`${this.url}/${id}/query-lastminutes`, { params }, this.config)
  //   .then(response => {
  //     return Promise.resolve(response.data.data);
  //   })
  //   .catch(error => {
  //     return Promise.reject(error);
  //   });
  // }

}