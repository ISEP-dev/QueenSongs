import React, {useEffect, useState} from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";

const callApiAsync = async (searchSong, setAutocompleteSongs) => {
    const response = await fetch(`http://localhost:8081/${searchSong}`).then(res => res.json());
    console.log(response.songs);
    setAutocompleteSongs(response.songs);
}

const App = () => {
    const [searchSong, setSearchSong] = useState('')
    const [autocompleteSongs, setAutocompleteSongs] = useState([])
    const [selectedSongs, setSelectedSongs] = useState([])

    useEffect(() => {
        callApiAsync(searchSong, setAutocompleteSongs);
    }, [searchSong])

    const handleSearchInputChange = (e) => {
        setSearchSong(e.target.value)
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
