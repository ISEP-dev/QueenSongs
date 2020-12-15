export const getSongsAsync = async (searchSong) => {
    try {
        const {songs} = await fetch(`http://localhost:8081/${searchSong}`).then(res => {
            if (res.ok) return res.json();
            throw new Error(res.status.toString());
        });

        return songs;
    } catch (e) {
        return [];
    }
}
