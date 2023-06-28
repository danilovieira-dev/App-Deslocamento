'use client'

import React from 'react';
import DashBoard from '../components/layout'
import NextLink from 'next/link';
import { Typography, Button, Grid, Box } from '@mui/material';
import Image from 'next/image';




const Home: React.FC = () => {
  return (
      
      <DashBoard>
         <Grid container spacing={10}>
      <Grid item xl={6}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="normal"  height="80vh" padding={3}>
          <Typography variant="h4" align='center' paddingBottom={11}  gutterBottom>
            Menu:
          </Typography>
          <Box display="flex" flexDirection="column" gap={6}>
            <NextLink href="/clientes" passHref>
              <Button variant="contained" color="primary" fullWidth component="a">
                Clientes
              </Button>
            </NextLink>
            <NextLink href="/condutores" passHref>
              <Button variant="contained" color="primary" fullWidth component="a">
                Condutores
              </Button>
            </NextLink>
            <NextLink href="/deslocamento" passHref>
              <Button variant="contained" color="primary" fullWidth component="a">
                Deslocamento
              </Button>
            </NextLink>
            <NextLink href="/veiculos" passHref>
              <Button variant="contained" color="primary" fullWidth component="a">
                Veículos
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" flexDirection="column" justifyContent="center"  alignItems="center" height="103vh">
          <Typography variant="h4" align="center" paddingBottom={7}  gutterBottom>
            Bem-vindo!
          </Typography>
          <Image src="/background.jpg" alt="background" width={800} height={500} />
        </Box>
      </Grid>
    </Grid>
      </DashBoard>
         
 );
};

export default Home;

