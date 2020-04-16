export interface IPostsBlock extends IResponse {
    title: string
}

export interface IResponse {
    docs: IPost[],
    total: number,
    limit: number,
    page: number,
    pages: number
}

export interface IPost {
    category: string[],
    _id: string,
    title: string,
    author: string,
    content?: string,
    description?:string,
    featuredImage?: string,
    tags?:string[]
}