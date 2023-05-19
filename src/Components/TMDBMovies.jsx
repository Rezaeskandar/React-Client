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

function Movie() {
  const [data, setData] = React.useState(false);
  // Object destructuring:
  let { movieId } = useParams();
  const TMDB_GET_DETAIL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=d82f364f4fa13e9d2bc3e63a48f37d0c&language=en-US`;
  console.log(POSTER_PREFIX)

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(TMDB_GET_DETAIL);
      console.log(result)
      setData(result.data);
    };

    fetchData();
  }, []);


  // Same result, no destructuring:
  //let params = useParams();
  //let movieId = params.movieId;
  //console.log(params);
  return data ? <h1>{data.title}</h1> : <h3>Loading</h3>;
}

function Moviess() {
  let match = useRouteMatch();
  //console.log(match);

  return (
    <>
      <h1>Movie</h1>
      <Switch>
        <Route path={`${match.path}/:movieId`}>
          <Movie />
        </Route>
        <Route path={match.path}>
          <h3>Go back and click a movie please.</h3>
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

        {/* <Card poster={falling_down_pic} title="Falling Down" description="An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them." />  */}

      </MainContainer>
    </Router>
  )
}


