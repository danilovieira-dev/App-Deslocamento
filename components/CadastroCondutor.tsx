'use client'

import DashBoard from './layout'
import React, { useState } from 'react';
import { Button, TextField, styled,Typography } from '@mui/material';
import axios from 'axios';


const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '400px',
  margin: '0 auto',
});

const CadastroCondutor = () => {
  const [nome, setNome] = useState('');
  const [numeroHabilitacao, setNumeroHabilitacao] = useState('');
  const [categoriaHabilitacao, setCategoriaHabilitacao] = useState('');
  const [vencimentoHabilitacao, setVencimentoHabilitacao] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoCondutor = {
      nome,
      numeroHabilitacao,
      categoriaHabilitacao,
      vencimentoHabilitacao,
    };

    try {
      
      await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Condutor', novoCondutor);

      
      setNome('');
      setNumeroHabilitacao('');
      setCategoriaHabilitacao('');
      setVencimentoHabilitacao('');

      console.log('Condutor criado com sucesso!');
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
  <DashBoard>

    <Typography align='center' variant="h4" component="h1" gutterBottom>
          Cadastro de Condutores
    </Typography>
    <FormContainer onSubmit={handleFormSubmit}>
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <TextField
        label="Número da Habilitação"
        value={numeroHabilitacao}
        onChange={(e) => setNumeroHabilitacao(e.target.value)}
        required
      />
      <TextField
        label="Categoria da Habilitação"
        value={categoriaHabilitacao}
        onChange={(e) => setCategoriaHabilitacao(e.target.value)}
        required
      />
      <TextField
        label="Vencimento da Habilitação"
        value={vencimentoHabilitacao}
        onChange={(e) => setVencimentoHabilitacao(e.target.value)}
        required
      />
      <Button type="submit">Cadastrar Condutor</Button>
    </FormContainer>
  </DashBoard>
        
  );
};

export default CadastroCondutor;
