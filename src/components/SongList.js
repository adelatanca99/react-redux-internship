import React, { Component } from "react";
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
    renderList() {
        return this.props.songs.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => { this.props.selectSong(song); console.log(this.props) }}>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                    <div>
                        <b> {song.title === this.props.songs.favoriteTitle && 'All stars' ? 'This is fav title' : null}</b>
                    </div>
                </div>
            );
        });
    }
    render() {
        return (<div className="ui divided list">{this.renderList()}</div>)
    }
}
const mapStateToProps = (state) => {
    console.log("State --> ", state);
    return { songs: state.songs, favoriteTitle: state.favoriteTitle };

}
export default connect(mapStateToProps, { selectSong })(SongList);