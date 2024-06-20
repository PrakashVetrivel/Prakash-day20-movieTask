document.getElementById('fetch-button').addEventListener('click', fetchMovie);

function fetchMovie() {
    const movie = document.getElementById('movie').value;
    const apiKey = '743df8d'; 
    const url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayMovie(data))
        .catch(error => console.error('Error fetching movie data:', error));
}

function displayMovie(data) {
    const container = document.getElementById('movie-container');
    container.innerHTML = `
        <h3>${data.Title} (${data.Year})</h3>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <img src="${data.Poster}" alt="${data.Title}">
    `;
}
