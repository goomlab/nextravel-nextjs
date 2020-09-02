import axios from 'axios';
import BaseService from '../../BaseService';

export default class PageFilterService extends BaseService {

  constructor(){
    super('/travelgo-one/filterpages');
  }

}