async function getMovieInfo() {
  let obj;
  const movie = document.getElementById('movies-display')

  const res = await fetch('src/imdb-top-50.json')
  obj = await res.json();

  title = obj.data.movies[0].title
  year = obj.data.movies[0].year
  image = obj.data.movies[0].urlPoster

  return (movie.innerHTML = `
  <div>
    <div class="movie-image"><img src="${image}" alt="${title} cover">
    </div>
    <div class="movie-title">${title}</div>
    <div class="movie-year">${year}</div>
  </div>
  `)
}

getMovieInfo();