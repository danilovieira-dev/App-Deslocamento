import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface Deslocamento {
  id: number;
  kmInicial: number;
  kmFinal?: number;
  inicioDeslocamento: string;
  fimDeslocamento?: string;
  checkList?: string;
  motivo?: string;
  observacao?: string;
  idCondutor: number;
  idVeiculo: number;
  idCliente: number;
}

const ConsultaDeslocamento = () => {
  const [deslocamentos, setDeslocamentos] = useState<Deslocamento[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(true);

  useEffect(() => {
    fetchDeslocamentos();
  }, []);

  const fetchDeslocamentos = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Deslocamento');
      setDeslocamentos(response.data);
    } catch (error) {
      console.error('Error fetching deslocamentos:', error);
    }
  };

  const handleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" align="center" gutterBottom>
        Bem-vindo à Página de Deslocamentos
      </Typography>

      <Button variant="contained" onClick={handleMostrarTodos}>
        {mostrarTodos ? 'Esconder Todos' : 'Mostrar Todos'}
      </Button>

      {mostrarTodos && (
        <Grid container spacing={2} mt={2}>
          {deslocamentos.map((deslocamento) => (
            <Grid key={deslocamento.id} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    ID: {deslocamento.id}
                  </Typography>
                  <Typography align="center">
                    KM Inicial: {deslocamento.kmInicial}
                  </Typography>
                  {deslocamento.kmFinal && (
                    <Typography align="center">
                      KM Final: {deslocamento.kmFinal}
                    </Typography>
                  )}
                  <Typography align="center">
                    Início do Deslocamento: {deslocamento.inicioDeslocamento}
                  </Typography>
                  {deslocamento.fimDeslocamento && (
                    <Typography align="center">
                      Fim do Deslocamento: {deslocamento.fimDeslocamento}
                    </Typography>
                  )}
                  {deslocamento.checkList && (
                    <Typography align="center">
                      Check List: {deslocamento.checkList}
                    </Typography>
                  )}
                  {deslocamento.motivo && (
                    <Typography align="center">
                      Motivo: {deslocamento.motivo}
                    </Typography>
                  )}
                  {deslocamento.observacao && (
                    <Typography align="center">
                      Observação: {deslocamento.observacao}
                    </Typography>
                  )}
                  <Typography align="center">
                    ID do Condutor: {deslocamento.idCondutor}
                  </Typography>
                  <Typography align="center">
                    ID do Veículo: {deslocamento.idVeiculo}
                  </Typography>
                  <Typography align="center">
                    ID do Cliente: {deslocamento.idCliente}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ConsultaDeslocamento;
