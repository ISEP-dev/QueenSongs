import React from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";
import {allSongs} from "./songs";

class App extends React.Component {

    constructor() {
        super();

        this.songs = allSongs.map(s => ({
            name: s,
            isSelected: false
        }));

        this.state = {
            searchSong: '',
            autocompleteSongs: this.songs,
            selectedSongs: []
        }
    }

    handleSearchInputChange = (e) => {
        this.setState({
            searchSong: e.target.value,
            autocompleteSongs: this.songs.filter(s =>
                s.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
    }

    handleSelectedSong = (selectedSong) => {
        const autocompleteSongsUpdated = this.state.autocompleteSongs.map(s => ({
            name: s.name,
            isSelected: selectedSong.name === s.name ? !s.isSelected : s.isSelected
        }));

        this.setState({
            autocompleteSongs: autocompleteSongsUpdated,
            selectedSongs: autocompleteSongsUpdated.filter(s => s.isSelected)
        });
    }

    render() {
        return (
            <div>
                <div className="header">Queen songs TP</div>
                <div className="card">
                    <SongInput searchSong={this.state.searchSong}
                               autocompleteSongs={this.state.autocompleteSongs}
                               handleSearchInputChange={this.handleSearchInputChange}
                               handleSelectedSong={this.handleSelectedSong}/>
                    <SongList selectedSongs={this.state.selectedSongs}
                              handleSelectedSong={this.handleSelectedSong}/>

                    <button className="validate-button" type="button" onClick={() => alert(this.state.selectedSongs.map(s => s.name).join(', \n'))}>Valider</button>
                </div>
            </div>
        );
    }
}

export default App;
