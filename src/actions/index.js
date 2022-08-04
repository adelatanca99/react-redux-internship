import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
//FOR SONGS

// // Action creator
// export const selectSong = (song) => {
//     // Return an action
//     return {
//         type: 'SONG_SELECTED',
//         payload: song

//     };
// };

// FOR FETCH PART


// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//     await dispatch(fetchPosts());

//     const userIds = _.uniq(_.map(getState().posts, 'userId'))
// }

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};
