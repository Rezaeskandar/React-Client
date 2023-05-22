import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';




function MyComponent() {
  const [genres, setGenres] = useState([]);
  const [genrePersons, setGenrePersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://localhost:7210/api/Movies/Genre');
        setGenres(response1.data);

        const response2 = await axios.get(`https://localhost:7210/api/Movies/GenrepersonbyId2`);
        setGenrePersons(response2.data.personGenereId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  
  return (
    <div>
      <h2>Genres:</h2>
      {genres  ? (
        <ul>
          {genres.map(genre => (
            <li key={genre.generId}>
              <div>
              {genre.generId }:
              {genre.title}<br />
              </div>
         
             
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading genres...</p>
      )}

      <h2>Genre Persons:</h2>
      {genrePersons? (
        <ul>
          {genrePersons.map(genrePerson => (
            <li key={genrePerson.personGenereId}>
              <strong>Person ID:</strong> {genrePerson.fK_personId}<br />
              <strong>Genre ID:</strong> {genrePerson.fK_GenreId}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading genre persons...</p>
      )}
    </div>
  );
}

export default MyComponent;