import Axios, {AxiosResponse} from 'axios';
const URL = 'https://ghblogs.herokuapp.com';

class requestAPI {
    static async getPostsList(params:string = '' ):Promise<AxiosResponse<any>> {
        return await Axios({
            url: URL +`/posts/`+ params,
            method: 'GET'
        })
    }
}

export default requestAPI;