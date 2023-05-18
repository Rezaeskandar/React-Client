import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 35em;
  width: 25em;
  /* background: red; */
  border: 2px solid black;
  margin-bottom: 1em;
`;

const CardImage = styled.img`
   object-fit: cover;
   height: 20em;
`;

const Overview = styled.p`
  padding: 1em;  
`;

function Card(props) {
    //console.log(props);
    return (
        <CardContainer>
            <CardImage src={props.poster} alt={props.title} />
            <h1>{props.title}</h1>
            <Overview>{props.overview}</Overview>
        </CardContainer>
    );
}


export default Card;