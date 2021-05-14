import JsonPlaceHolder from '../apis/JsonPlaceholder';

export const fetchPosts = () => async (dispatch) => {
        const response = await JsonPlaceHolder.get('/posts')

        dispatch({type: 'FETCH_POSTS', payload: response})
    };