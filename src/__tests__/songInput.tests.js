import {render, fireEvent, within } from "@testing-library/react";
import SongInput from "../components/song-input/SongInput";

const mockSelectedSongs = ["Song1"]
const mockAutocompleteSongs = ["Song1", "Song2", "Song3"]
const mockHandleSelectedSong = jest.fn()
const mockHandleSearchInputChange = jest.fn()

describe("SongInput Tests", () => {
    it("Handle search input", () => {
        const componentRendered = render(
            <SongInput selectedSongs={mockSelectedSongs}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={mockHandleSearchInputChange}
                       handleSelectedSong={mockHandleSelectedSong}/>
        );

        const textField = componentRendered.getByPlaceholderText("Please search a song...");
        const textFieldElement = { target: { value: "TautoSong" }};
        fireEvent.change(textField, textFieldElement);

        expect(mockHandleSearchInputChange).toHaveBeenCalledTimes(1);
    })

    it("Handle songs selected", async () => {
        const mockHandleSelectedSongTest = jest.fn()
        const componentRendered = render(
            <SongInput selectedSongs={mockSelectedSongs}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={jest.fn()}
                       handleSelectedSong={mockHandleSelectedSongTest}/>
        );

    })
})
