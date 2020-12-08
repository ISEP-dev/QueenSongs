export const getSongs = async (searchSong, setAutocompleteSongs) => {
    try {
        const {songs} = await fetch(`http://localhost:8081/${searchSong}`).then(res => {
            if (res.ok) return res.json();
            throw new Error(res.status.toString());
        });

        setAutocompleteSongs(songs);
    } catch (e) {
        alert(e);
    }
}
