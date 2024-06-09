import React from 'react';
import Menu from '../Components/Menu'; // Verifique o caminho correto do arquivo, se necessário
import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Certifique-se de que está usando react-router-dom v6 ou superior
import logo from '../img/logo5.png'; // Verifique o caminho correto da imagem

const Home = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('./Cadastrar'); // Verifique o caminho correto da rota "Cadastrar"
  };

  return (
    <div style={{ backgroundColor: '#333', color: 'white', minHeight: '100vh' }}> {/* Cor alterada */}
      <Menu />
      <Container sx={{ paddingTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img 
              src={logo} 
              alt="Descrição da imagem" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" component="h1" sx={{ marginBottom: 2 }}>
              Bem-vindo Professor!
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
              Preparado para iniar uma nova turma?
            </Typography>
            <Button variant="contained" color="primary" onClick={handleCadastroClick}sx={{ 
                 backgroundColor: 'white', // Cor de fundo
                 color: 'black', // Cor do texto
                 fontWeight: 'bold', // Negrito
                 transition: '0.3s', // Transição suave
                 '&:hover': { 
                   backgroundColor: '#ffffff', // Cor de fundo ao passar o mouse
                   color: '#001', // Cor do texto ao passar o mouse
                   transform: 'scale(1.1)' // Aumenta o tamanho ao passar o mouse
                 } 
              }}>
              Cadastrar Turma
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
