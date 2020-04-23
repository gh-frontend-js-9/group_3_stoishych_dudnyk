import { Author } from './author';

export interface PostResponse {
    _id: string;
    title: string;
    category: string[];
    tags: string[];
    author: Author;
    featuredImage: string;
    description: string;
    likesCount: number;
    viewsCount: number;
    content: string;
    slug: string;
    __v: number;
}
