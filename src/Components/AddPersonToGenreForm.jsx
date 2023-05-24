import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 300px;
  margin: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-left: 10px;
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

const AddPersonToGenreForm = () => {
  const [personId, setPersonId] = useState('');
  const [genreId, setGenreId] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://localhost:7210/api/Movies/add-person-to-genre',
        {
          personId: parseInt(personId),
          genreId: parseInt(genreId)
        }
      );

      console.log(response.data); // Handle the response data as needed

      // Reset the form
      setPersonId('');
      setGenreId('');
    } catch (error) {
      console.error(error); // Handle any errors that occur
    }
  };

  return (
    <FormContainer>
      <Label>
        Person ID:
        <Input
          type="number"
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
        />
      </Label>
      <br />
      <Label>
        Genre ID:
        <Input
          type="number"
          value={genreId}
          onChange={(e) => setGenreId(e.target.value)}
        />
      </Label>
      <br />
      <Button type="button" onClick={handleSubmit}>
        Add 
      </Button>
    </FormContainer>
  );
};

export default AddPersonToGenreForm;
