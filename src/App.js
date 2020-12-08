import React, {useEffect, useState} from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";
import {Button} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import SongSelectedModal from "./components/song-selected-modal";

const callApiAsync = async (searchSong, setSongsFound) => {
    try {
        const {songs} = await fetch(`http://localhost:8081/${searchSong}`).then(res => {
            if (res.ok) return res.json();
            throw new Error(res.status.toString());
        });

        setSongsFound(songs);
    } catch (e) {
        alert(e);
    }
}

const App = () => {
    const [songsFound, setSongsFound] = useState([]);
    const [searchSong, setSearchSong] = useState('')
    const [autocompleteSongs, setAutocompleteSongs] = useState([])
    const [selectedSongs, setSelectedSongs] = useState([])
    const [isOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (!!searchSong) {
            callApiAsync(searchSong, setSongsFound);
        }
    }, [searchSong])

    useEffect(() => {
        setAutocompleteSongs(songsFound.map(song => ({
            name: song,
        })));
    }, [songsFound])

    const handleSearchInputChange = (e) => setSearchSong(e.currentTarget.value)

    const handleSelectedSongs = (songsSelected) => {
        setSelectedSongs(songsSelected);
    }

    return (
        <div>
            <div className="header">Queen songs TP</div>
            <div className="card">
                <SongInput searchSong={searchSong}
                           autocompleteSongs={autocompleteSongs}
                           handleSearchInputChange={handleSearchInputChange}
                           handleSelectedSong={handleSelectedSongs}/>
                <SongList selectedSongs={selectedSongs}
                          handleSelectedSong={handleSelectedSongs}/>

                <Button variant="outlined" color="primary" onClick={() => setModalOpen(true)}>Valider</Button>
                <SongSelectedModal isOpen={isOpen} handleClose={() => setModalOpen(false)} selectedSongs={selectedSongs}/>
            </div>
        </div>
    )
}

export default App;
