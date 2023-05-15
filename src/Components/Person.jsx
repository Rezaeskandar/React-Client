// // import {
// //     BrowserRouter as Router,
// //     Switch,
// //     Route,
// //     Link,
// //     useRouteMatch,
// //     useParams
// // } from "react-router-dom";
// // import axios from 'axios';

// // import React from 'react'
// // const PersonList = () => {
// //     const [data, setData] = useState([]);


// //     useEffect(() => {
// //         const fetchData = async () => {

// //             const result = await axios(`https://localhost:7210/api/Movies/person`);
// //             setData(result.data);
// //         };
// //         fetchData();
// //     }, []);

// //     return (
// //         <div>
// //             {/* <ul>
// //       {data.map(item => (
// //         <li key={item.personId}>
// //           <a href={item.url}>{item.name}</a>
// //         </li>
// //       ))}
// //     </ul> */}
// //             {data ? (
// //                 <ul>
// //                     {data.map(item => (
// //                         <li key={item.personId}>
// //                             <Link to={`/persons/${item.personId}`}>{item.name}</Link>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             ) : (
// //                 <p>Loading data...</p>
// //             )}

// //         </div>
// //     );
// // }
// // export default function Person() {
// //     return (
// //         <div>
// //              <PersonList></PersonList>
// //             <h3>

// //                 Person
// //             </h3>
// //         </div>
// //     )
// // }
// import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';


// function PersonList() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(`https://localhost:7210/api/Movies/person`);
//       setData(result.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {data.map(item => (
//           <li key={item.personId}>
//             <Link to={`/person/${item.personId}/details`} >{item.name}</Link>
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function PersonDetails() {
//   const { personId } = useParams();
//   const [person, setPerson] = useState({ movies: [] });

//   useEffect(() => {
//     const fetchPerson = async () => {
//       const personResult = await axios(`https://localhost:7210/api/Movies/person/${personId}`);
//       setPerson(personResult.data);
      
//       const movieResult = await axios(`https://localhost:7210/api/Movies/GetMovieByPerson?PersonName=${personResult.data.name}`);
//       setPerson(prevState => ({ ...prevState, movies: movieResult.data }));
//     };
//     fetchPerson();
//   }, [personId]);

//   return (
//     <div>
//       <h3>Movies for {person.name}</h3>
//       <ul>
//         {person.movies.map(movie => (
//           <li key={movie.movieId}>
//             <a href={movie.movelink} target="_blank" rel="noopener noreferrer">{movie.name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Person() {
//     const { path, url } = useRouteMatch();

//     return(
//       <div>
//         <Router>
//           <h3>Person</h3>
//           <Switch>
//             <Route exact path={path}>
//             <p>Select a person from the list.</p>
//               <PersonList />
//             </Route>
//             <Route path={`${path}/:personId/details`}>
//               <PersonDetails />
//             </Route>
//           </Switch>
//         </Router>
//       </div>
//     );
// }

// export default Person;