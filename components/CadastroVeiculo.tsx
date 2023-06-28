'use client'

import DashBoard from './layout'
import React, { useState } from 'react';
import { Button, TextField, styled, Typography } from '@mui/material';
import axios from 'axios';


const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '400px',
  margin: '0 auto',
});

const CadastroVeiculo = () => {
  const [placa, setPlaca] = useState('');
  const [marcaModelo, setMarcaModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState(0);
  const [kmAtual, setKmAtual] = useState(0);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoVeiculo = {
      placa,
      marcaModelo,
      anoFabricacao,
      kmAtual,
    };

    try {
      
      await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Veiculo', novoVeiculo);

      
      setPlaca('');
      setMarcaModelo('');
      setAnoFabricacao(0);
      setKmAtual(0);

      console.log('Veículo cadastrado com sucesso!');
    } catch (error) {
      
      console.error(error);
    }
  };

  return (

    <DashBoard>
      <Typography align='center' variant="h4" component="h1" gutterBottom>
          Cadastro de Veiculos
    </Typography>
    <FormContainer onSubmit={handleFormSubmit}>
      <TextField
        label="Placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
        required
      />
      <TextField
        label="Marca/Modelo"
        value={marcaModelo}
        onChange={(e) => setMarcaModelo(e.target.value)}
        required
      />
      <TextField
        type="number"
        label="Ano de Fabricação"
        value={anoFabricacao}
        onChange={(e) => setAnoFabricacao(parseInt(e.target.value))}
        required
      />
      <TextField
        type="number"
        label="Kilometragem Atual"
        value={kmAtual}
        onChange={(e) => setKmAtual(parseInt(e.target.value))}
        required
      />
      <Button type="submit">Cadastrar Veículo</Button>
    </FormContainer>
    </DashBoard>
    
  );
};

export default CadastroVeiculo;
