import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {

  
let { data: posts, error } = await api.get
  .from('posts')
  .select('id')

  const {data} = await api.get(`/posts?id=`)

  //TODO: SEARCH A SPECIFIC POST
  //const {data} = await api.get(`/post?id=eq.${id}`)
  return {}
}
