async function getMovieInfo() {
  let obj;
  const movie = document.getElementById('movies-display')
  const res = await fetch('src/imdb-top-50.json')
  obj = await res.json();

  for (let i = 0; i < obj.data.movies.length; i++) {
    title = obj.data.movies[i].title
    year = obj.data.movies[i].year
    image = obj.data.movies[i].urlPoster
    movie.innerHTML += `
      <div class="single-movie">
        <div class="movie-image" style="background-image: url('${image}')"><div class="movie-rating"></div></div>
        <div class="movie-description">
          <div class="movie-title">${title}</div>
          <div class="movie-year">${year}</div>
        </div>
      </div>
    `
  }

  return movie.innerHTML
}

getMovieInfo()