import axios from 'axios';
import BaseService from '../../BaseService';

export default class HotelCategoryService extends BaseService {

  constructor(){
    super('/travelgo-one/categories');
  }

}