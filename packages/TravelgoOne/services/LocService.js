import axios from 'axios';
import BaseService from '../../BaseService';

export default class LocService extends BaseService {

  constructor(){
    super('/travelgo-one/locs');
  }

}