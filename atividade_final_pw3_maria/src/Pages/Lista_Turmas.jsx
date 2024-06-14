import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Message from '../Components/Mensagem/mensagem';
import CardSala from '../Components/CardSala';
import { Typography, Container, Box } from '@mui/material';
import Menu from '../Components/Menu'; 

const ListagemAlunos = () => {
  const location = useLocation();
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/Turmas')
      .then((response) => {
        console.log(response.data);
        setDados(response.data);
      })
      .catch((error) => {
        console.error(`Erro na listagem dos alunos: ${error}`);
      });
  }, []);

  let message = '';
  if (location.state) message = location.state;

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/Turmas/${id}`)
      .then((response) => {
        alert('Usuário deletado com sucesso!');
        window.location.reload(); 
      })
      .catch((error) => {
        console.error(`deu erro filhao ${error}`);
      });
  };

  return (
    <div style={{ backgroundColor: '#333', color: 'white', minHeight: '100vh' }}>
      <Menu /> 
      <Container sx={{ paddingTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2" component="h1" sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center',alignItems: 'center' }} >Turmas Cadastradas</Typography>
        {message && <Message message={'Sala cadastrada com sucesso!'} type={'sucess'} />}
        <Box sx={{ width: '100%', height: '100%', marginTop: 2}}>
          <section sx={{mt:5}}>
            {dados && dados.map((sala, index) => (
              <CardSala
                key={index}
                id={sala.id}
                siglaSala={sala.category.category}
                nomeSala={sala.NomeTurma}
                idSigla={sala.category.id}
                handleDelete={handleDelete}
              />
            ))}
          </section>
        </Box>
      </Container>
    </div>
  );
};

export default ListagemAlunos;
