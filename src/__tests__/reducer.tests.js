import React from "react";
import {songReducer} from "../reducers/SongReducer";
import {UPDATE_AUTOCOMPLETE_SONGS, UPDATE_MODAL, UPDATE_SELECTED_SONGS} from "../actions";

describe("Reducer Tests", () => {
    it("Default state", () => {
        const expectedDefaultState = {
            isOpen: false,
            autocompleteSongs: [],
            selectedSongs: []
        }

        expect(songReducer(undefined, {})).toStrictEqual(expectedDefaultState);
    })

    it("UPDATE_MODAL", () => {
        const expectedModalState = { isOpen: true };
        const expectedAction = {
            type: UPDATE_MODAL,
            payload: expectedModalState
        }

        expect(songReducer({}, expectedAction).isOpen).toBeTruthy();
    })

    it("UPDATE_AUTOCOMPLETE_SONGS", () => {
        const currentState = { autocompleteSongs: ["Test0"] };
        const expectedAutocompleteSongs = ["Test1", "Test2", "Test3"]
        const action = {
            type: UPDATE_AUTOCOMPLETE_SONGS,
            payload: expectedAutocompleteSongs
        }

        expect(songReducer(currentState, action).autocompleteSongs).toEqual(expectedAutocompleteSongs);
    })

    it("UPDATE_SELECTED_SONGS", () => {
        const currentState = { selectedSongs: ["Test0"] };
        const expectedSelectedSongs = ["Test1", "Test2", "Test3"]
        const action = {
            type: UPDATE_SELECTED_SONGS,
            payload: expectedSelectedSongs
        }

        expect(songReducer(currentState, action).selectedSongs).toStrictEqual(expectedSelectedSongs);
    })
})
