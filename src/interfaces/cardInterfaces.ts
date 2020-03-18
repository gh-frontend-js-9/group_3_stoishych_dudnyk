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
    content: string,
    author: string,
    featuredImage?: string
}