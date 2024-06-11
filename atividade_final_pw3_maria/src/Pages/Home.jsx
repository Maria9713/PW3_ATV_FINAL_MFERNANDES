import React from 'react';
import Menu from '../Components/Menu'; 
import { Typography, Container, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import logo from '../img/logo5.png'; 
import Btn from '../Components/Btn';

const Home = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('./Cadastrar'); 
  };

  return (
    <div style={{ backgroundColor: '#333', color: 'white', minHeight: '100vh' }}> 
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
            <Btn onClick={handleCadastroClick}>Cadastrar Nova Turma</Btn>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
