import React from 'react';
import './songlist.css';

const SongList = ({selectedSongs, handleSelectedSong}) => (
    !selectedSongs.length
        ? <div className="empty-state">
            <img
                src="https://images-ext-2.discordapp.net/external/fOGKRejC36zQnlLUPrsiCN3FYj8GOfxC_5l0cQgAr_U/https/media.tenor.com/images/f1ce00e545246eac374be04a415722ec/tenor.gif"
                alt="empty"/>
            <div className="empty-state-text">No song selected</div>
        </div>
        : <ul className="song-list">
            {
                selectedSongs.map((songSelected, i) => (
                    <li className="song-list-item"
                        key={i}>
                        {songSelected.name}
                        <button type="button"
                                onClick={() => handleSelectedSong(songSelected)}>
                            &times;
                        </button>
                    </li>
                ))
            }
        </ul>
)

SongList.propTypes = {
    selectedSongs: PropTypes.array.isRequired,
    handleSelectedSong: PropTypes.func.isRequired
}

export default SongList;
