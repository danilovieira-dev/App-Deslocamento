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

const IniciarDeslocamento = () => {
  const [kmInicial, setKmInicial] = useState(0);
  const [inicioDeslocamento, setInicioDeslocamento] = useState('');
  const [checkList, setCheckList] = useState('');
  const [motivo, setMotivo] = useState('');
  const [observacao, setObservacao] = useState('');
  const [idCondutor, setIdCondutor] = useState(0);
  const [idVeiculo, setIdVeiculo] = useState(0);
  const [idCliente, setIdCliente] = useState(0);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoDeslocamento = {
      kmInicial,
      inicioDeslocamento,
      checkList,
      motivo,
      observacao,
      idCondutor,
      idVeiculo,
      idCliente,
    };

    try {
      // Realize a lógica de envio da requisição POST para a API usando o Axios
      await axios.post(
        'https://api-deslocamento.herokuapp.com/api/v1/Deslocamento/IniciarDeslocamento',
        novoDeslocamento
      );

      // Limpe os campos do formulário após o envio da requisição
      setKmInicial(0);
      setInicioDeslocamento('');
      setCheckList('');
      setMotivo('');
      setObservacao('');
      setIdCondutor(0);
      setIdVeiculo(0);
      setIdCliente(0);

      console.log('Deslocamento iniciado com sucesso!');
    } catch (error) {
      // Trate os erros de requisição aqui, se necessário
      console.error(error);
    }
  };

  return (
    <DashBoard>
    <Typography align='center' variant="h4" component="h1" gutterBottom>
          Iniciar Deslocamento 
    </Typography>
    <FormContainer onSubmit={handleFormSubmit}>
      <TextField
        type="number"
        label="Kilometragem Inicial"
        value={kmInicial}
        onChange={(e) => setKmInicial(parseInt(e.target.value))}
        required
      />
      <TextField
        label="Início do Deslocamento"
        value={inicioDeslocamento}
        onChange={(e) => setInicioDeslocamento(e.target.value)}
        required
      />
      <TextField
        label="Checklist"
        value={checkList}
        onChange={(e) => setCheckList(e.target.value)}
      />
      <TextField
        label="Motivo"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
      />
      <TextField
        label="Observação"
        value={observacao}
        onChange={(e) => setObservacao(e.target.value)}
      />
      <TextField
        type="number"
        label="ID do Condutor"
        value={idCondutor}
        onChange={(e) => setIdCondutor(parseInt(e.target.value))}
      />
      <TextField
        type="number"
        label="ID do Veículo"
        value={idVeiculo}
        onChange={(e) => setIdVeiculo(parseInt(e.target.value))}
      />
      <TextField
        type="number"
        label="ID do Cliente"
        value={idCliente}
        onChange={(e) => setIdCliente(parseInt(e.target.value))}
      />
      <Button type="submit">Iniciar Deslocamento</Button>
    </FormContainer>
    </DashBoard>
    
  );
};

export default IniciarDeslocamento;
