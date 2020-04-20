import {Post} from "./docs";
import {Author} from "./author";

export interface PostState {
    status?: string,
    payload: Post
}

export interface PostResponse {
    _id: string,
    title: string,
    category: string[],
    tags: string[],
    author: Author,
    featuredImage: string,
    description: string,
    likesCount: number,
    viewsCount: number,
    content: string,
    slug: string,
    __v: number,
}
