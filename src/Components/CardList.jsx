import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Card from './Card';

const TMDB_GET_MOVIES =
  "https://api.themoviedb.org/3/discover/movie?api_key=d82f364f4fa13e9d2bc3e63a48f37d0c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&with_genres=80,18,53";
// TMDB API KEY: d82f364f4fa13e9d2bc3e63a48f37d0c
export const POSTER_PREFIX = "https://image.tmdb.org/t/p/original";

const CardListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  margin: 0 0.5em;
  background-color: #4287f5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1e5ae8;
  }
`;

function CardList(props) {
  const [data, setData] = React.useState({ results: [] });
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(TMDB_GET_MOVIES + "&page=" + page);
      console.log(result);
      setData(result.data);
    };

    fetchData();
  }, [page]);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <CardListContainer>
        {data.results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Card
              title={movie.title}
              overview={movie.overview}
              poster={POSTER_PREFIX + movie.poster_path}
            />
          </Link>
        ))}
      </CardListContainer>

      <ButtonContainer>
        <Button onClick={prevPage}>PREV PAGE</Button>
        <Button onClick={nextPage}>NEXT PAGE</Button>
      </ButtonContainer>
    </>
  );
}

export default CardList;
