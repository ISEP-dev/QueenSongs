import React, {useEffect, useState} from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";
import {allSongs} from "./songs";

const callApiAsync = async (searchSong, setSongs) => {
    const response = await fetch(`http://localhost:8081/${searchSong}`);
    console.log(response);
    setSongs(response);
}

const App = () => {
    const [songs, setSongs] = useState([])

    const [searchSong, setSearchSong] = useState('')
    const [autocompleteSongs, setAutocompleteSongs] = useState(songs)
    const [selectedSongs, setSelectedSongs] = useState([])

    useEffect(() => {
        callApiAsync(searchSong, setSongs).then();
    }, [searchSong])

    const handleSearchInputChange = (e) => {
        setSearchSong(e.target.value)
        setAutocompleteSongs(songs.filter(s =>
            s.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))
    }

    const handleSelectedSong = (selectedSong) => {
        const autocompleteSongsUpdated = autocompleteSongs.map(s => ({
            name: s.name,
            isSelected: selectedSong.name === s.name ? !s.isSelected : s.isSelected
        }))

        setAutocompleteSongs(autocompleteSongsUpdated)
        setSelectedSongs(autocompleteSongsUpdated.filter(s => s.isSelected))
    }

    return (
        <div>
            <div className="header">Queen songs TP</div>
            <div className="card">
                <SongInput searchSong={searchSong}
                           autocompleteSongs={autocompleteSongs}
                           handleSearchInputChange={handleSearchInputChange}
                           handleSelectedSong={handleSelectedSong}/>
                <SongList selectedSongs={selectedSongs}
                          handleSelectedSong={handleSelectedSong}/>

                <button className="validate-button" type="button"
                        onClick={() => alert(selectedSongs.map(s => s.name).join(', \n'))}>Valider
                </button>
            </div>
        </div>
    )
}

export default App;
