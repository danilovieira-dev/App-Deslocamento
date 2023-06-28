import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';

interface Condutor {
  id: number;
  nome: string;
  numeroHabilitacao: string;
  categoriaHabilitacao: string;
  vencimentoHabilitacao: string;
}

const ConsultaCondutor = () => {
  const [condutores, setCondutores] = useState<Condutor[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState(true);

  useEffect(() => {
    fetchCondutores();
  }, []);

  const fetchCondutores = async () => {
    try {
      const response = await axios.get('https://api-deslocamento.herokuapp.com/api/v1/Condutor');
      setCondutores(response.data);
    } catch (error) {
      console.error('Error fetching condutores:', error);
    }
  };

  const handleMostrarTodos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const handleExcluirCondutor = async (id: number) => {
    try {
      await axios.delete(`https://api-deslocamento.herokuapp.com/api/v1/Condutor/${id}`);
      fetchCondutores();
    } catch (error) {
      console.error('Error deleting condutor:', error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h4" align="center" gutterBottom>
        Bem-vindo à Página de Condutores
      </Typography>

      <Button variant="contained" onClick={handleMostrarTodos}>
        {mostrarTodos ? 'Esconder Todos' : 'Mostrar Todos'}
      </Button>

      {mostrarTodos && (
        <Grid container spacing={2} mt={2}>
          {condutores.map((condutor) => (
            <Grid key={condutor.id} item xs={12} sm={6}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    ID: {condutor.id}
                  </Typography>
                  <Typography align="center">
                    Nome: {condutor.nome}
                  </Typography>
                  <Typography align="center">
                    Número Habilitação: {condutor.numeroHabilitacao}
                  </Typography>
                  <Typography align="center">
                    Categoria Habilitação: {condutor.categoriaHabilitacao}
                  </Typography>
                  <Typography align="center">
                    Vencimento Habilitação: {condutor.vencimentoHabilitacao}
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color='error'
                  onClick={() => handleExcluirCondutor(condutor.id)}
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

export default ConsultaCondutor;
