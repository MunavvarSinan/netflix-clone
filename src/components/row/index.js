import React, { useState, useEffect, createContext } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import axios from '../../config/axios';
import { Container, CardTitle, RowImage, Slider, RowItem, ArrowLeft, ArrowRight } from './styles/row';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
export const MovieContext = createContext();
export default function Row({ title, fetchUrl, isLargeRow, id }) {
  //   console.log(movies);
  const [movies, setMovies] = useState([]);
  // const [modalVisibility, setModalVisibility] = useState(false);
  // const [movieSelected, setMovieSelection] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // const handleClick = (movie) => {
  //   setModalVisibility(true);
  //   setMovieSelection(movie);
  // };

  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <Slider>
        <ArrowLeft
          onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
          }}
        >
          <ArrowBackIosIcon />
        </ArrowLeft>
        <RowItem id={id}>
          {movies.map((movie) => (
            <RowImage
              key={movie.id}
              // onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              style={isLargeRow ? { maxHeight: '320px' } : { maxHeight: '144px' }}
              src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
            />
          ))}
        </RowItem>
        <ArrowRight
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}
        >
          <ArrowForwardIosIcon />
        </ArrowRight>
      </Slider>
      {/* {modalVisibility && <MovieModal {...movieSelected} setModalVisibility={setModalVisibility} />} */}
    </Container>
  );
}
