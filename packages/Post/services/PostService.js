import axios from 'axios';
import BaseService from '../../BaseService';

export default class PostService extends BaseService {

  constructor(){
    super('/post/posts');
  }

}