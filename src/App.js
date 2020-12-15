import React from 'react';
import './App.css';
import SongInput from "./components/song-input/SongInput";
import SongList from "./components/song-list/SongList";
import {Container} from "@material-ui/core";
import SongSelectedModal from "./components/song-selected-modal";

const App = () => {

    return (
        <Container className="container">
            <h1 className="title">Queen songs TP</h1>
            <div className="card">
                <SongInput/>
                <SongList/>
                <SongSelectedModal/>
            </div>
        </Container>
    )
}

export default App;
