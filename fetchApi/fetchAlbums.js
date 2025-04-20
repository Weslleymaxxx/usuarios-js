export const fetchAlbums = async() => {
    const reqAlbums = await fetch('https://jsonplaceholder.typicode.com/albums');
    const resAlbums = await reqAlbums.json();

    return resAlbums
}