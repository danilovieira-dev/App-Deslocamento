import React from 'react';
import { Container, AppBar, Toolbar, Typography, Link, Box, styled } from '@mui/material';
import NextLink from 'next/link';

const LayoutContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const Header = styled(AppBar)({
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled('img')({
  marginRight: '20px',
});

const NavigationLinks = styled(Box)({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
});

const Footer = styled('footer')({
  marginTop: 'auto',
  backgroundColor: '#f5f5f5',
  padding: '20px',
  textAlign: 'center',
});

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutContainer maxWidth="100%">
      <Header position="relative">
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Logo src="./logo.jpg" alt="Logo" width={75} height={55} />
            </Link>
          </NextLink>
          <Typography variant="h6" component="div" sx={{ marginRight: '900px' }}>
            API Deslocamento
          </Typography>
          <NavigationLinks>
            <NextLink href="/" passHref>
              <Link color="inherit" sx={{ marginRight: '35px' }}>
                Home
              </Link>
            </NextLink>
            <NextLink href="/clientes" passHref>
              <Link color="inherit" sx={{ marginRight: '35px' }}>
                Clientes
              </Link>
            </NextLink>
            <NextLink href="/condutores" passHref>
              <Link color="inherit" sx={{ marginRight: '35px' }}>
                Condutores
              </Link>
            </NextLink>
            <NextLink href="/deslocamento" passHref>
              <Link color="inherit" sx={{ marginRight: '35px' }}>
                Deslocamento
              </Link>
            </NextLink>
            <NextLink href="/veiculos" passHref>
              <Link color="inherit" sx={{ marginRight: '35px' }}>
                Veículos
              </Link>
            </NextLink>
          </NavigationLinks>
        </Toolbar>
      </Header>
      <main>
        {children}
      </main>
      <Footer>
        <Typography variant="body2" color="textSecondary">
          Feito por Danilo Vieira   &copy; 2023
        </Typography>
      </Footer>
    </LayoutContainer>
  );
}


