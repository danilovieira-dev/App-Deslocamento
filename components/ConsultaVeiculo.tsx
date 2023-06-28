import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface Veiculo {
  id: number;
  placa: string;
  marcaModelo: string;
  anoFabricacao: number;
  kmAtual: number;
}

const ConsultaVeiculo = () => {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(true);

  useEffect(() => {
    fetchVeiculos();
  }, []);

  const fetchVeiculos = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Veiculo');
      setVeiculos(response.data);
    } catch (error) {
      console.error('Error fetching veiculos:', error);
    }
  };

  const handleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const handleExcluirVeiculo = async (id: number) => {
    try {
      await axios.delete(`https://api-deslocamento.herokuapp.com/api/v1/Veiculo/${id}`);
      fetchVeiculos();
    } catch (error) {
      console.error('Error deleting veiculo:', error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" align="center" gutterBottom>
        Bem-vindo à Página de Veículos
      </Typography>

      <Button variant="contained" onClick={handleMostrarTodos}>
        {mostrarTodos ? 'Esconder Todos' : 'Mostrar Todos'}
      </Button>

      {mostrarTodos && (
        <Grid container spacing={2} mt={2}>
          {veiculos.map((veiculo) => (
            <Grid key={veiculo.id} item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    ID: {veiculo.id}
                  </Typography>
                  <Typography align="center">
                    Placa: {veiculo.placa}
                  </Typography>
                  <Typography align="center">
                    Marca/Modelo: {veiculo.marcaModelo}
                  </Typography>
                  <Typography align="center">
                    Ano de Fabricação: {veiculo.anoFabricacao}
                  </Typography>
                  <Typography align="center">
                    KM Atual: {veiculo.kmAtual}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color='error'
                  onClick={() => handleExcluirVeiculo(veiculo.id)}
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

export default ConsultaVeiculo;
