import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from '../../config/axios';
import { Container, CardTitle, RowImage, Slider, RowMeta, RowItem, RowText, RowSubTitle } from './styles/row';

const baseUrl = 'https://image.tmdb.org/t/p/original/';
export const MovieContext = createContext();
export default function Row({ title, fetchUrl, isLargeRow, children, ...restProps }) {
  //   console.log(movies);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <Container {...restProps}>
      <CardTitle>{title}</CardTitle>
      <Slider>
        {movies.map((item) => (
          <RowItem>
            <RowImage
              // className={`row__poster ${isLargeRow && 'row__posterLarge'}`} // use && if theres no else or : otherwise use ?
              style={isLargeRow ? { maxHeight: '250px' } : { maxHeight: '100px' }}
              key={item.id} // use && if theres no else or : otherwise use ?
              src={`${baseUrl}${isLargeRow ? item.poster_path : item.backdrop_path}`}
              alt={item.name}
            />
            <RowMeta>
              <RowSubTitle>{item.title}</RowSubTitle>
              <RowText>{item.overview}</RowText>
            </RowMeta>
          </RowItem>
        ))}
      </Slider>
    </Container>
  );
}
