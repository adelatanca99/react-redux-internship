import React from 'react';
import Counter from './Counter';
import SongList from './SongList';
import Component1 from './useContext1';
import SongDetail from './SongDetail';


import PostList from './PostList';


const App = () => {
    return (
        <div className='ui container grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
            <Counter />
            <Component1 />
        </div>
    )
};

// const App = () => {
//     return <div className='ui cotainer'><PostList /></div>
// }

export default App;