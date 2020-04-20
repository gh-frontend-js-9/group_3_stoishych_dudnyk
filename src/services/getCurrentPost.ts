import {Post} from "../interfaces/docs";
import requestApi from "./requestAPI";
import { currentIdUrl } from "../pages/Post";

export const getCurrentPost = async (): Promise<Post> => {
    const response = await requestApi.getCurrentPost(currentIdUrl);
    return response.data
}
