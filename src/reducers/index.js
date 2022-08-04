import { combineReducers } from 'redux';

const songsReducer = () => {
    return {
        songs: [{
            title: 'No scrubs',
            duration: '4:05',
        },
        {
            title: 'Macarena',
            duration: '2:05',

        }, {
            title: 'All stars',
            duration: '3:15',
        },
        {
            title: 'I want it that way',
            duration: '3:05',

        }],
        favoriteTitle: "All stars"
    };
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;

};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})