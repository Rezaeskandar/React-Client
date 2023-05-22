import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import CardList, { POSTER_PREFIX } from './CardList';


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
`;

const StyledPara = styled.p`
  max-width: 20em;
`;
const Api_key ="4830bcf38fe0badbc31f150d78c89f7f"

function Movie() {
  const [data, setData] = React.useState(false);
  // Object destructuring:
  let { movieId } = useParams();
  const TMDB_GET_DETAIL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}&language=en-US`;
  console.log(POSTER_PREFIX)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(TMDB_GET_DETAIL);
      console.log(result)
      setData(result.data);
    };

    fetchData();
  }, []);


  return data ? <h1>{data.title}</h1> : <h3>Loading</h3>;
}
function Moviess() {
  let match = useRouteMatch();
  

  return (
    <>
      <h1>Movie</h1>
      <Switch>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
        <Route path={match.path}>
        </Route>
      </Switch>
    </>
  );

};

export default function Movies() {
  return (
  
     <Router>
      <MainContainer>

        <Switch>
          <Route path="/movie">
            <Movies />
          </Route>
          <Route path="/">
         
            <CardList />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  )
}


