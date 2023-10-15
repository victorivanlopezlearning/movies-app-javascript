
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
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
      }
    };
    const response = await fetch(`${import.meta.env.VITE_API_URL}/3/movie/popular?page=${page}`, options);
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}