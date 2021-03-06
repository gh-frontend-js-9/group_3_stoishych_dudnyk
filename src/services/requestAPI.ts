import Axios, { AxiosResponse } from 'axios';
import { PostResponse } from '../interfaces/post';

const URL = 'https://ghblogs.herokuapp.com';
const TagURL = 'https://random-word-api.herokuapp.com/word';

class RequestAPI {
  static async getPostsList(params = ''): Promise<AxiosResponse<any>> {
    return Axios({
      url: `${URL}/posts/${params}`,
      method: 'GET',
    });
  }

  static async getCurrentPost(id: string): Promise<AxiosResponse<PostResponse>> {
    return Axios({
      url: `${URL}/posts/${id}`,
      method: 'GET',
    });
  }

  static async getTags(quantity = 1): Promise<AxiosResponse<any>> {
    return Axios({
      url: `${TagURL}?number=${quantity}&swear=0`,
      method: 'GET',
    });
  }
}

export default RequestAPI;
