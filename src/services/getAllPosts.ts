import { Docs } from '../interfaces/docs';
import requestApi from './requestAPI';

const popularParams = '?category=popular&page=1&limit=5&fields=title,_id,tags,category,author,featuredImage,description';
const essentialParams = '?category=essential&page=1&limit=5&fields=title,tags,_id,category,author,description';
const freelanceParams = '?category=freelance&page=1&limit=5&fields=title,tags,_id,category,author,description';

export const getPopularPostsData = async (): Promise<Docs> => {
  const response = await requestApi.getPostsList(popularParams);
  return response.data.docs;
};

export const getEssentialPostsData = async (): Promise<Docs> => {
  const response = await requestApi.getPostsList(essentialParams);
  return response.data.docs;
};

export const getFreelancePostsData = async (): Promise<Docs> => {
  const response = await requestApi.getPostsList(freelanceParams);
  return response.data.docs;
};
