import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PersonList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://localhost:7210/api/Movies/person`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.personId}>
            <Link to={`/person/${item.personId}`} >{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MovieList() {
  const { personId } = useParams();
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://localhost:7210/api/Movies/GetMovieByPersonById?PersonId=${personId}`);
        setMovies(response.data.movies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [personId]);

  return (
    <div>
      <h1>Movies for {personId}:</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.movieId}>
            <a href={movie.movieLink}>{movie.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Person() {
  // const { path } = useRouteMatch();
  let match = useRouteMatch();
  return (
    <div>
      <Router>
        <h3>Person</h3>
        <Switch>
          <Route exact path={match.path}>
            <p>Select a person from the list.</p>
            <PersonList />
          </Route>
          <Route path={`${match.path}:personId`}>
            <MovieList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default function Home() {
  return (
    <div>Home
      <Person/>
    </div>
  )
}