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
        <List className="list-container" title={"List of Songs"}>
            {
                selectedSongs.length ? selectedSongs.map((songSelected, i) => (
                    <ListItem display="flex" alignItems="center" key={i} button>
                        <ListItemText primary={songSelected}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => handleRemove(songSelected)} title={"closeButton"}>
                                <CloseIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )) : <div>No song selected</div>
            }
        </List>
    )
}

SongList.propTypes = {
    selectedSongs: PropTypes.array.isRequired,
    handleSelectedSong: PropTypes.func.isRequired
}

export default SongList;
