import axios from 'axios';
import BaseService from '../../BaseService';

export default class MenuService extends BaseService {

  constructor(){
    super('/post/menu');
  }

}