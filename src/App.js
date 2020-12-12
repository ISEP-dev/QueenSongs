import React, {useEffect, useState} from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";
import {Button, Container} from "@material-ui/core";
import SongSelectedModal from "./components/song-selected-modal";
import {getSongs} from "./song.service";

const App = () => {
    const [searchSong, setSearchSong] = useState('')
    const [autocompleteSongs, setAutocompleteSongs] = useState([])
    const [selectedSongs, setSelectedSongs] = useState([])
    const [isOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (searchSong) {
            getSongs(searchSong, setAutocompleteSongs);
        }
    }, [searchSong])

    const handleSearchInputChange = (searchSong) => setSearchSong(searchSong)
    const handleSelectedSongs = (songsSelected) => setSelectedSongs(songsSelected)

    return (
        <Container className="container">
            <h1 className="title">Queen songs TP</h1>
            <div className="card">
                <SongInput autocompleteSongs={autocompleteSongs}
                           handleSearchInputChange={handleSearchInputChange}
                           handleSelectedSong={handleSelectedSongs} selectedSongs={selectedSongs}/>
                <SongList selectedSongs={selectedSongs} handleSelectedSong={handleSelectedSongs}/>

                <Button className="modal-button" variant="outlined" color="primary" onClick={() => setModalOpen(true)}>Valider</Button>
                <SongSelectedModal isOpen={isOpen} handleClose={() => setModalOpen(false)} selectedSongs={selectedSongs}/>
            </div>
        </Container>
    )
}

export default App;
