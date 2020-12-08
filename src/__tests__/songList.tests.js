import {render} from "@testing-library/react";
import SongList from "../components/song-list/SongList";


describe("SongList Tests", () => {
    it("Test click remove button", () => {
        const firstElement = 0;
        const mockSelectedSong = ["First Song", "Second Song", "Third Song"]
        const mockHandleSelectedSong = jest.fn()

        const componentRendered = render(<SongList selectedSongs={mockSelectedSong} handleSelectedSong={mockHandleSelectedSong}/>)

        const closeButton = componentRendered.getAllByTitle('closeButton')[firstElement]

        closeButton.click()

        expect(mockSelectedSong).toContain("First Song")
        expect(mockHandleSelectedSong).toHaveBeenCalledTimes(1)
        expect(mockHandleSelectedSong).toHaveBeenCalledWith(mockSelectedSong[firstElement])

    })
})