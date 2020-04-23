import { Author } from './author';
import { CurrentPostState } from '../reducers/currentPost';
import { CurrentAuthorState } from '../reducers/currentAuthor';

export interface Post {
    _id: string;
    title: string;
    category: string[];
    tags?: string[];
    author: Author;
    featuredImage?: string;
    description?: string;
    likesCount?: number;
    viewsCount?: number;
    content?: string;
    slug?: string;
    __v?: number;
}

export type Docs =
    Post[]

export interface CategoryState {
    status?: string;
    payload: Docs;
}

export interface DocsState {
    popular: CategoryState;
    essential: CategoryState;
    freelance: CategoryState;
    currentPost: CurrentPostState;
    currentAuthor: CurrentAuthorState;
}
