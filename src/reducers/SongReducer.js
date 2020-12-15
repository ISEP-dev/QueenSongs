import {UPDATE_AUTOCOMPLETE_SONGS, UPDATE_MODAL, UPDATE_SELECTED_SONGS} from "../actions";

const defaultState = {
    isOpen: false,
    autocompleteSongs: [],
    selectedSongs: []
}

export const songReducer = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_AUTOCOMPLETE_SONGS:
            return {
                ...state,
                autocompleteSongs: action.payload,
                selectedSongs: state.selectedSongs
            }
        case UPDATE_SELECTED_SONGS:
            return {
                isOpen: state.isOpen,
                autocompleteSongs: state.autocompleteSongs,
                selectedSongs: action.payload
            }
        case UPDATE_MODAL:
            return {
                ...state,
                isOpen: action.payload
            }
        default:
            return state;
    }
}
