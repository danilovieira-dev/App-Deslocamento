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

const CadastroCliente = () => {
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [nome, setNome] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoCliente = {
      numeroDocumento,
      tipoDocumento,
      nome,
      logradouro,
      numero,
      bairro,
      cidade,
      uf,
    };

    try {
      
      await axios.post('https://api-deslocamento.herokuapp.com/api/v1/Cliente', novoCliente);

      
      setNumeroDocumento('');
      setTipoDocumento('');
      setNome('');
      setLogradouro('');
      setNumero('');
      setBairro('');
      setCidade('');
      setUf('');

      console.log('Cliente criado com sucesso!');
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
   <DashBoard>
    <Typography align='center' variant="h4" component="h1" gutterBottom>
          Cadastro de Clientes
    </Typography>
    <FormContainer onSubmit={handleFormSubmit}>
      <TextField
        label="Número do Documento"
        value={numeroDocumento}
        onChange={(e) => setNumeroDocumento(e.target.value)}
        required
      />
      <TextField
        label="Tipo do Documento"
        value={tipoDocumento}
        onChange={(e) => setTipoDocumento(e.target.value)}
        required
      />
      <TextField
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <TextField
        label="Logradouro"
        value={logradouro}
        onChange={(e) => setLogradouro(e.target.value)}
        required
      />
      <TextField
        label="Número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        required
      />
      <TextField
        label="Bairro"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
        required
      />
      <TextField
        label="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        required
      />
      <TextField
        label="UF"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
        required
      />
      <Button type="submit">Cadastrar Cliente</Button>
    </FormContainer>
   </DashBoard> 
    
  );
};

export default CadastroCliente;
