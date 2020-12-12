import React from 'react';
import './songinput.css';
import PropTypes from 'prop-types'
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from "@material-ui/lab/Autocomplete";

const SongInput = (props) => {
    const handleChange = (e, values) => props.handleSelectedSong(values);
    return (
        <Autocomplete multiple
                      className="autocomplete-container"
                      data-testid="autocomplete"
                      id="checkboxes-tags-demo"
                      onChange={handleChange}
                      options={props.autocompleteSongs}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option}
                      renderTags={_ => <span className="autocomplete-container-input">{props.selectedSongs.join(', ')}</span>}
                      renderOption={(option) => (
                          <React.Fragment>
                              <Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small"/>}
                                        checkedIcon={<CheckBoxIcon fontSize="small"/>}
                                        style={{marginRight: 8}}
                                        title="autocomplete-checkbox"
                                        checked={props.selectedSongs.includes(option)}
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
                                     onChange={props.handleSearchInputChange}/>
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

export default SongInput;
