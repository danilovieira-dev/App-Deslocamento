import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface Cliente {
  id: number;
  numeroDocumento: string;
  tipoDocumento: string;
  nome: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const ConsultaCliente = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(true);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Cliente');
      setClientes(response.data);
    } catch (error) {
      console.error('Error fetching clientes:', error);
    }
  };

  const handleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const handleExcluirCliente = async (id: number) => {
    try {
      await axios.delete(`https://api-deslocamento.herokuapp.com/api/v1/Cliente/${id}`);
      fetchClientes();
    } catch (error) {
      console.error('Error deleting cliente:', error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" align="center" gutterBottom>
        Bem-vindo à Página de Clientes
      </Typography>

      <Button variant="contained" onClick={handleMostrarTodos}>
        {mostrarTodos ? 'Esconder Todos' : 'Mostrar Todos'}
      </Button>

      {mostrarTodos && (
        <Grid container spacing={2} mt={2}>
          {clientes.map((cliente) => (
            <Grid key={cliente.id} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    ID: {cliente.id}
                  </Typography>
                  <Typography align="center">
                    Número Documento: {cliente.numeroDocumento}
                  </Typography>
                  <Typography align="center">
                    Tipo Documento: {cliente.tipoDocumento}
                  </Typography>
                  <Typography align="center">
                    Nome: {cliente.nome}
                  </Typography>
                  <Typography align="center">
                    Logradouro: {cliente.logradouro}
                  </Typography>
                  <Typography align="center">
                    Número: {cliente.numero}
                  </Typography>
                  <Typography align="center">
                    Bairro: {cliente.bairro}
                  </Typography>
                  <Typography align="center">
                    Cidade: {cliente.cidade}
                  </Typography>
                  <Typography align="center">
                    UF: {cliente.uf}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color='error'
                  onClick={() => handleExcluirCliente(cliente.id)}
                  sx={{ width: '100%' }}
                >
                  Excluir
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ConsultaCliente;
