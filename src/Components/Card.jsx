import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35em;
  width: 25em;
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
  overflow: hidden;
  margin-left: 2em;
  margin-top: 5em;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  object-fit: cover;
  height: 20em;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 1em;
  text-align: center;
`;

const CardTitle = styled.h1`
  margin: 0;
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const Overview = styled.p`
  margin: 0;
  font-size: 1em;
`;

function Card(props) {
  return (
    <CardContainer>
      <CardImage src={props.poster} alt={props.title} />
      <CardContent>
        <CardTitle>{props.title}</CardTitle>
        <Overview>{props.overview}</Overview>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
