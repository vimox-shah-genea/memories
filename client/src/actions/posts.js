import * as api from '../api';

export const getPosts = () =>  async(dispatch) => {

    try {
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: data}    
        return dispatch(action)
    } catch (error) {
        console.log(error.message);
        
    }
}

export const createPost = (post) =>  async (dispatch) => {
    try {

        const { data } = await api.createPost(post);
        const action = { type: 'CREATE_POST', payload: data}    
        return dispatch(action)

    } catch (error) {
        console.log(error.message);
        
    }
}


export const updatePost = (id, updatedPost) =>  async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);
        const action = { type: 'UPDATE', payload: data}    
        return dispatch(action)


    } catch (error) {
        console.log(error);
        
    }
}

export const deletePost = (id) =>  async (dispatch) => {
    try {
        await api.deletePost(id);
        const action = { type: 'DELETE', payload: id}    
        return dispatch(action)


    } catch (error) {
        console.log(error);
        
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
      const action = { type: 'LIKE', payload: data}    
        return dispatch(action)

  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };