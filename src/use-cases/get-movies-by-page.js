
/**
 * 
 * @param {Number} page 
 * @returns {Promise<Movies[]>}
 */
export const GetMoviesByPage = async (page = 1) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTlmNDRjMjJlNmRmZDVlYjQ0MWYwYTQ2MjQ2YWMxMyIsInN1YiI6IjY1MmFmZWUyMGNiMzM1MTZmZDQ5OTlmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0FEwi3GeapJMwthMNDalye0L_UF6eX9mUclVnV7L5BE'
      }
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/3/movie/popular?page=${page}`, options);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}