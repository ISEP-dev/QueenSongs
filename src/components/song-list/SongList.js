import React from 'react';
import './songlist.css';

class SongList extends React.Component {

    render() {
        if (!this.props.selectedSongs.length) {
            return (
                <div className="empty-state">
                    <img
                        src="https://images-ext-2.discordapp.net/external/fOGKRejC36zQnlLUPrsiCN3FYj8GOfxC_5l0cQgAr_U/https/media.tenor.com/images/f1ce00e545246eac374be04a415722ec/tenor.gif"
                        alt="empty"/>
                    <div className="empty-state-text">No song selected</div>
                </div>
            )
        }

        return (
            <ul className="song-list">
                {
                    this.props.selectedSongs.map((songSelected, i) => (
                        <li className="song-list-item"
                            key={i}>
                            {songSelected.name}
                            <button type="button"
                                    onClick={() => this.props.handleSelectedSong(songSelected)}>&times;</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default SongList;
