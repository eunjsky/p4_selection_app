export function getMovieDetail(movieName){
    return fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${movieName.toLowerCase()}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "0bddc33020msh443a1cf18b3644cp1ef6cejsn179c39f77c2e"
        }
    })
    .then(response => {
        return response.json()
    }) 
    .catch(err => {
        console.error(err);
    });
}