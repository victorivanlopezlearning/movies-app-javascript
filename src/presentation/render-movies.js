import { GetMoviesByPage } from '../use-cases/get-movies-by-page';

/**
 * 
 * @param {HTMLElement} content 
 * @param {Number} page 
 */

export const RenderMovies = async (content, page) => {
  const movies = await GetMoviesByPage(page);

  let moviesHTML = '';

  movies.forEach(movie => {
    const { poster_path, title } = movie;

    moviesHTML += `
      <div class="movie">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}">
        <h3 class="title">${title}</h3>
      </div>
    `;

    content.innerHTML = moviesHTML;
  });

  
}