const api_key = "05954ce013db039af9150e8e6e66f260";
const requests = {
  fetchPopular: `/movie/popular?api_key=${api_key}`,
  fetchNowplaying: `/movie/now_playing?api_key=${api_key}`,
  fetchToprated: `/movie/top_rated?api_key=${api_key}`,
  fetchUpcoming: `/movie/upcoming?api_key=${api_key}`,
};
export default requests;
