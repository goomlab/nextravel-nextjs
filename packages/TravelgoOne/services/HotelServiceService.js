import axios from 'axios';
import BaseService from '../../BaseService';

export default class HotelServiceService extends BaseService {

  constructor(){
    super('/travelgo-one/services');
  }

}