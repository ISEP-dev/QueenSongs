import React from 'react';
import './songinput.css';
import PropTypes from 'prop-types'
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {connect} from "react-redux";
import {updateAutocompleteSongs, updateSelectedSongs} from "../../actions";

const SongInput = (props) => {
    const handleChange = (e, values, reason) => {
        if (reason === "clear") {
            props.handleSelectedSong([])
            return;
        }

        const selectedSong = e.currentTarget.innerText;
        const isAlreadySelected = props.selectedSongs.includes(selectedSong);
        const selectedSongsUpdated = isAlreadySelected
            ? props.selectedSongs.filter(s => s !== selectedSong)
            : [...props.selectedSongs, selectedSong];
        props.handleSelectedSong(selectedSongsUpdated)
    }

    const handleSearchChange = (e) => props.handleSearchInputChange(e.currentTarget.value);

    return (
        <Autocomplete multiple
                      className="autocomplete-container"
                      data-testid="autocomplete"
                      id="checkboxes-tags-demo"
                      onChange={handleChange}
                      options={props.autocompleteSongs}
                      disableCloseOnSelect
                      getOptionSelected={(option, value) => option === value && props.selectedSongs.includes(option)}
                      getOptionLabel={(option) => option}
                      renderTags={_ => <span className="autocomplete-container-input">{props.selectedSongs.join(', ')}</span>}
                      renderOption={(option, {selected}) => (
                          <React.Fragment>
                              <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                                        style={{marginRight: 8}}
                                        title="autocomplete-checkbox"
                                        checked={selected}
                                        readOnly
                              />
                              {option}
                          </React.Fragment>
                      )}
                      renderInput={(params) => (
                          <TextField {...params}
                                     variant="outlined"
                                     label="Songs"
                                     placeholder="Please search a song..."
                                     onChange={handleSearchChange}/>
                      )}
        />
    )
}

SongInput.propTypes = {
    handleSearchInputChange: PropTypes.func.isRequired,
    autocompleteSongs: PropTypes.array.isRequired,
    handleSelectedSong: PropTypes.func.isRequired,
    selectedSongs: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    autocompleteSongs: state.autocompleteSongs,
    selectedSongs: state.selectedSongs,
})
const mapDispatchToProps = dispatch => ({
    handleSearchInputChange: searchValue => updateAutocompleteSongs(dispatch, searchValue),
    handleSelectedSong: selectedSongs => dispatch(updateSelectedSongs(selectedSongs)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongInput);
