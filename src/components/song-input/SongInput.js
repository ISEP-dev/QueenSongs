import  React from 'react';
import './songinput.css';

class SongInput extends React.Component {

    render() {
        return (
            <span className="search-input-container">
                <input className="search-input"
                       type="text"
                       value={this.props.searchSong}
                       placeholder="Search your song"
                       onChange={this.props.handleSearchInputChange}/>
                       <img className="search-input-img" src="https://images-ext-2.discordapp.net/external/qFaWG6UrIhj7WCGEmR7kZBcBeVfJFUIFtLqgmN-QwB0/%3Fitemid%3D15056195%2522/https/media1.tenor.com/images/15f209bdae6da376665c3a1b2cb781ea/tenor.gif"
                            alt="icon-loop"/>
                <ul className="search-input-list">
                    {
                        !!this.props.autocompleteSongs.length
                            ? (
                                this.props.autocompleteSongs.map((s, i) =>
                                    <li className="search-input-list-item"
                                        key={i}
                                        onClick={() => this.props.handleSelectedSong(s)}>
                                        <input type="checkbox" id={`checkbox-song-${i}`} checked={s.isSelected} readOnly/>
                                        {s.name}
                                    </li>
                                )
                            )
                            : <div className="empty-state-input">No song found</div>

                    }
                </ul>
            </span>
        );
    }
}

export default SongInput;
