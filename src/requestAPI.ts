import Axios, {AxiosResponse} from 'axios';
const URL = 'https://ghblogs.herokuapp.com';
const TagURL = 'https://random-word-api.herokuapp.com/word' 

class requestAPI {
    static async getPostsList(params:string = '' ):Promise<AxiosResponse<any>> {
        return Axios({
            url: URL +`/posts/`+ params,
            method: 'GET'
        });
    }

    static async getTags(quantity:number = 1, ):Promise<AxiosResponse<any>> {
        return Axios({
            url: TagURL + `?number=${quantity}&swear=0`,
            method: 'GET'
        });
    }
}

export default requestAPI;