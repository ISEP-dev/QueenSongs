import {render, fireEvent } from "@testing-library/react";
import SongInput from "../components/song-input/SongInput";

const mockSelectedSongs = ["Song1"]
const mockAutocompleteSongs = ["Song1", "Song2", "Song3"]
const mockHandleSelectedSong = jest.fn()
const mockHandleSearchInputChange = jest.fn()

describe("SongInput Tests", () => {
    it("Test search input", () => {
        const componentRendered = render(
            <SongInput selectedSongs={mockSelectedSongs}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={mockHandleSearchInputChange}
                       handleSelectedSong={mockHandleSelectedSong}/>
        );

        const textField = componentRendered.getByPlaceholderText("Please search a song...");
        const textFieldElement = { target: { value: "TautoSong" }};
        fireEvent.change(textField, textFieldElement);

        expect(textField).toHaveTextContent(/^$/);
        expect(mockHandleSearchInputChange).toHaveBeenCalledTimes(1);
        expect(mockHandleSearchInputChange).toHaveBeenCalledWith("TautoSong");
    })

    it ("Test select one song", async () => {
        const componentRendered = render(
            <SongInput selectedSongs={mockSelectedSongs}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={mockHandleSearchInputChange}
                       handleSelectedSong={mockHandleSelectedSong}/>
        )

        const textFieldInput = componentRendered.getByPlaceholderText("Please search a song...");
        fireEvent.change(textFieldInput, {target: { value: "Song1"}});
        fireEvent.focus(textFieldInput);

        const checkBox = componentRendered.getAllByTitle("autocomplete-checkbox")[0]
        const checkboxInput = checkBox.querySelector('input[type="checkbox"]')
        fireEvent.click(checkboxInput)

        expect(mockHandleSelectedSong).toHaveBeenCalledTimes(1)
        expect(mockHandleSelectedSong).toHaveBeenCalledWith(["Song1"])
    })

    it ("Test select multiple songs", async () => {
        const componentRendered = render(
            <SongInput selectedSongs={mockSelectedSongs}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={mockHandleSearchInputChange}
                       handleSelectedSong={mockHandleSelectedSong}/>
        )

        const textFieldInput = componentRendered.getByPlaceholderText("Please search a song...");
        fireEvent.change(textFieldInput, {target: { value: "Song"}});
        fireEvent.focus(textFieldInput);

        const checkBoxes = componentRendered.getAllByTitle("autocomplete-checkbox")
        const checkboxInputOne = checkBoxes[0].querySelector('input[type="checkbox"]')
        const checkboxInputTwo = checkBoxes[1].querySelector('input[type="checkbox"]')

        fireEvent.click(checkboxInputOne)
        fireEvent.click(checkboxInputTwo)

        expect(mockHandleSelectedSong).toHaveBeenCalledTimes(2)
        expect(mockHandleSelectedSong).toHaveBeenCalledWith(["Song1", "Song2"])
    })

    it ("Test checkboxes has been checked", async () => {
        const expectedSongSelected = [...mockSelectedSongs, "Song2"]
        const componentRendered = render(
            <SongInput selectedSongs={expectedSongSelected}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={mockHandleSearchInputChange}
                       handleSelectedSong={mockHandleSelectedSong}/>
        )

        const textFieldInput = componentRendered.getByPlaceholderText("Please search a song...");
        fireEvent.change(textFieldInput, {target: { value: "Song"}});
        fireEvent.focus(textFieldInput);

        const checkBoxes = componentRendered.getAllByTitle("autocomplete-checkbox")

        const checkboxInputOne = checkBoxes[0].querySelector('input[type="checkbox"]')
        const checkboxInputTwo = checkBoxes[1].querySelector('input[type="checkbox"]')

        expect(checkboxInputOne).toBeChecked()
        expect(checkboxInputTwo).toBeChecked()
    })

    it ("Test deselected songs", async () => {
        const componentRendered = render(
            <SongInput selectedSongs={mockSelectedSongs}
                       autocompleteSongs={mockAutocompleteSongs}
                       handleSearchInputChange={mockHandleSearchInputChange}
                       handleSelectedSong={mockHandleSelectedSong}/>
        )

        const textFieldInput = componentRendered.getByPlaceholderText("Please search a song...");
        fireEvent.change(textFieldInput, {target: { value: "Song"}});
        fireEvent.focus(textFieldInput);

        const checkBoxOne = componentRendered.getAllByTitle("autocomplete-checkbox")[0]
        const checkboxInputOne = checkBoxOne.querySelector('input[type="checkbox"]')

        fireEvent.click(checkboxInputOne)
        fireEvent.click(checkboxInputOne)

        expect(mockHandleSelectedSong).toHaveBeenCalledTimes(2)
        expect(mockHandleSelectedSong).toHaveBeenCalledWith([])
    })
})
