import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import FetchRating from './FetchRating';

const Container = styled.div`
  padding: 20px;
`;

const ListContainer = styled.div`
  margin-top: 20px;
`;

const PersonListItem = styled.div`
  margin-bottom: 10px;
  padding: 12px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    background-color: #e6e6e6;
  }
`;

const MovieTitle = styled.h4`
  margin: 0;
  color: #333;
  font-size: 18px;
  margin-bottom: 5px;
`;

const MovieLink = styled.a`
  margin: 0;
  color: #666;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #999;
  }
`;

function PersonList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://localhost:7210/api/Movies/person');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ListContainer>
      {data.map(item => (
        <PersonListItem key={item.personId}>
          <Link to={`/person/${item.personId}`}>
            <MovieTitle>{item.name}</MovieTitle>
          </Link>
        </PersonListItem>
      ))}
    </ListContainer>
  );
}

function MovieList() {
  const { personId } = useParams();
  const [movies, setMovies] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://localhost:7210/api/Movies/GetMovieByPersonById?PersonId=${personId}`);
        setMovies(result.data.movies);
               
      const response3 = await axios.get(`https://localhost:7210/api/Movies/Get-Rating-Movie-ByPersonId?personId=${personId}`);
      setRatings(response3.data.movies)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [personId]);



  return (
    <div>
      <h3>Movies for person{personId}:</h3>
      <ListContainer>
        {movies.map(movie => (
          <PersonListItem key={movie.movieId}>
           Movie Name: <MovieTitle> {movie.name}</MovieTitle>
            <MovieLink href={movie.movelink}> {movie.movelink}</MovieLink>
            <p>Rating: {movie.ratings}</p>
          </PersonListItem>
        ))}
      </ListContainer>

      <h3>Ratings for person {personId}:</h3>
      <ListContainer>
        {ratings.map(rating => (
          <PersonListItem key={rating.ratingId}>
            <p>Rating: {rating.ratings}</p>
          </PersonListItem>
        ))}
      </ListContainer>
    </div>
  );
}



function Person() {
  const { path } = useRouteMatch();

  return (
    <Container>
      <p>Select a person from the list.</p>
      <Router>
        <Switch>
          <Route exact path={path}>
            <PersonList />
          </Route>
          <Route path="/person/:personId" exact>
            <MovieList />
            <FetchRating/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default function Home() {
  return (
    <div>
      <Person />
    
    </div>
  );
}
