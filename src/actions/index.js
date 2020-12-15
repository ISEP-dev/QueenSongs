import {getSongsAsync} from "../song.service";

export const UPDATE_AUTOCOMPLETE_SONGS = "UPDATE_AUTOCOMPLETE_SONGS";
export const UPDATE_SELECTED_SONGS = "UPDATE_SELECTED_SONGS";
export const UPDATE_MODAL = "UPDATE_MODAL";

export const updateAutocompleteSongs = async (dispatch, searchValue) => {
    const response = await getSongsAsync(searchValue)
    dispatch({type: UPDATE_AUTOCOMPLETE_SONGS, payload: response})
}

export const updateSelectedSongs = selectedSongs => {
    console.log("HANDLE CHANGE: " + selectedSongs)
    return ({
        type: UPDATE_SELECTED_SONGS,
        payload: selectedSongs
    });
};

export const updateModal = isOpen => ({
    type: UPDATE_MODAL,
    payload: isOpen
});
