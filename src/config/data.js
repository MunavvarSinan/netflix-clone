import { requests } from './config';

export const Datas = {
  dataList: [
    {
      id: 1,
      title: 'NETFLIX ORIGINALS',
      fetchUrl: requests.fetchNetflixOriginals,
      isLargeRow: true,
    },
    {
      id: 2,
      title: 'Trending Now',
      fetchUrl: requests.fetchTrending,
    },
    { id: 3, title: 'Top Rated', fetchUrl: requests.fetchTopRated },
    { id: 3, title: 'Action Movies', fetchUrl: requests.fetchActionMovies },
    { id: 3, title: 'Comedy Movies', fetchUrl: requests.fetchComedyMovies },
    { id: 3, title: 'Horror Movies', fetchUrl: requests.fetchHorrorMovies },
    { id: 3, title: 'Romance Movies', fetchUrl: requests.fetchRomanceMovies },
    { id: 3, title: 'Documentaries', fetchUrl: requests.fetchDocumentaries },
  ],
};
export const movieUrl = [
  requests.fetchActionMovies,
  requests.fetchComedyMovies,
  requests.fetchDocumentaries,
  requests.fetchHorrorMovies,
  requests.fetchNetflixOriginals,
  requests.fetchRomanceMovies,
  requests.fetchTopRated,
  requests.fetchTrending,
];
