import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
  padding: 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const AddNewFilmForm = () => {
  const [personId, setPersonId] = useState('');
  const [genreId, setGenreId] = useState('');
  const [newLinks, setNewLinks] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://localhost:7210/api/Movies/Add-NewLink/${personId}/genre/${genreId}/link`,
        {
          fK_personId: parseInt(personId),
          fK_GenreId: parseInt(genreId),
          newLinks
        }
      );

      console.log(response.data); // Handle the response data as needed

      // Reset the form
      setPersonId('');
      setGenreId('');
      setNewLinks('');
    } catch (error) {
      console.error(error); // Handle any errors that occur
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Person ID:
        <Input
          type="number"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
        />
      </Label>
      <Label>
        Genre ID:
        <Input
          type="number"
          value={genreId}
          onChange={(e) => setGenreId(e.target.value)}
        />
      </Label>
      <Label>
        New Links:
        <Input
          type="text"
          value={newLinks}
          onChange={(e) => setNewLinks(e.target.value)}
        />
      </Label>
      <Button type="submit">Add New Film</Button>
    </FormContainer>
  );
};

export default AddNewFilmForm;
