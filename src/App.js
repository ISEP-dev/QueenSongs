import React, {useEffect, useState} from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";
import {Button, Container} from "@material-ui/core";
import SongSelectedModal from "./components/song-selected-modal";

const callApiAsync = async (searchSong, setAutocompleteSongs) => {
    try {
        const {songs} = await fetch(`http://localhost:8081/${searchSong}`).then(res => {
            if (res.ok) return res.json();
            throw new Error(res.status.toString());
        });

        setAutocompleteSongs(songs);
    } catch (e) {
        alert(e);
    }
}

const App = () => {
    const [searchSong, setSearchSong] = useState('')
    const [autocompleteSongs, setAutocompleteSongs] = useState([])
    const [selectedSongs, setSelectedSongs] = useState([])
    const [isOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (!!searchSong) {
            callApiAsync(searchSong, setAutocompleteSongs);
        }
    }, [searchSong])

    const handleSearchInputChange = (e) => setSearchSong(e.currentTarget.value)
    const handleSelectedSongs = (songsSelected) => setSelectedSongs(songsSelected)

    return (
        <Container className="container">
            <h1 className="title">Queen songs TP</h1>
            <div className="card">
                <SongInput searchSong={searchSong}
                           autocompleteSongs={autocompleteSongs}
                           handleSearchInputChange={handleSearchInputChange}
                           handleSelectedSong={handleSelectedSongs} songsSelected={selectedSongs}/>
                <SongList selectedSongs={selectedSongs} handleSelectedSong={handleSelectedSongs}/>

                <Button className="modal-button" variant="outlined" color="primary" onClick={() => setModalOpen(true)}>Valider</Button>
                <SongSelectedModal isOpen={isOpen} handleClose={() => setModalOpen(false)} selectedSongs={selectedSongs}/>
            </div>
        </Container>
    )
}

export default App;
