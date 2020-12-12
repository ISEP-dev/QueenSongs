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
        expect(mockHandleSelectedSong).toHaveBeenCalledWith(mockSelectedSong.filter(s => s !== mockSelectedSong[firstElement]))
    })

    it("Test list of selected songs", () => {
        const mockSelectedSong = ["Song1", "Song2", "Song3", "Song4"]
        const mockHandleSelectedSong = jest.fn()

        const componentRendered = render(<SongList selectedSongs={mockSelectedSong} handleSelectedSong={mockHandleSelectedSong}/>)

        const listItemTexts = componentRendered.getAllByTitle("list-item-text")
        const listItemTextValues = listItemTexts.map(l => l.textContent)

        expect(listItemTextValues).toStrictEqual(mockSelectedSong)

    })

    it("Test no selectedSongs", () => {
        const mockSelectedSong = []
        const mockHandleSelectedSong = jest.fn()

        const componentRendered = render(<SongList selectedSongs={mockSelectedSong} handleSelectedSong={mockHandleSelectedSong}/>)

        const divNoSong = componentRendered.getByTitle('noSongsSelected')

        expect(mockSelectedSong).toEqual([])
        expect(mockHandleSelectedSong).not.toHaveBeenCalled()
        expect(divNoSong.textContent).toBe("No song selected")

    })
})