import React from 'react';
import './songlist.css';
import PropTypes from 'prop-types'
import {IconButton, List, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close'

const SongList = ({selectedSongs, handleSelectedSong}) => {
    const handleRemove = (songSelected) => {
        const selectedSongsUpdate = selectedSongs.filter(s => s !== songSelected);
        handleSelectedSong(selectedSongsUpdate);
    }

    return (
        !selectedSongs.length
            ? <div className="empty-state">
                <img
                    src="https://images-ext-2.discordapp.net/external/fOGKRejC36zQnlLUPrsiCN3FYj8GOfxC_5l0cQgAr_U/https/media.tenor.com/images/f1ce00e545246eac374be04a415722ec/tenor.gif"
                    alt="empty"/>
                <div className="empty-state-text">No song selected</div>
            </div>
            : <List overflow="auto" height="75%" title={"List of Songs"}>
                {
                    selectedSongs.map((songSelected, i) => (
                        <ListItem display="flex" alignItems="center" key={i} button>
                            <ListItemText primary={songSelected}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" onClick={() => handleRemove(songSelected)} title={"closeButton"}>
                                    <CloseIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }
            </List>
    )
}

SongList.propTypes = {
    selectedSongs: PropTypes.array.isRequired,
    handleSelectedSong: PropTypes.func.isRequired
}

export default SongList;
