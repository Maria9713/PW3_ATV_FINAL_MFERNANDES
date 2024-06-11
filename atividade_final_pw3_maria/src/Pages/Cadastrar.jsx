import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Menu from '../Components/Menu';
import { Typography, Container, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo5.png';
import Select from '../Components/Select';
import Input from '../Components/input';
import Btn from '../Components/Btn';

const Cadastrar = () => {
  const [itens, setItens] = useState([]);
  const [sala, setSala] = useState({});
  const navigate = useNavigate("")


  useEffect(() => {

      fetch('http://localhost:5000/Siglas',
          {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
          })
          .then(
              (response) => response.json()
          ).then(
              (data) => {
                  setItens(data);
                  console.log(itens);
                  console.log(data)
                  
              }
          )
          .catch(
              (error) => {
                  console.log(`Não foi possivel fazer o fetch do conteudo: ${error}`)
              }
          )
  },
      []);

  

  function handleItens(event){
      event.preventDefault();
      setSala({...sala, [event.target.id] : event.target.value});
      console.log(sala);

  }

  function handleClassroom(selectedOptionId, options) {
    const selectedOption = options.find(option => option.id === selectedOptionId);
  
    if (selectedOption) {
      setSala({...sala, category:{
          id: selectedOption.id,
          category: selectedOption.Sala
      }});
    }
  }


  function handleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:5000/Turmas', sala)
      .then((response)=>{
          console.log(response.data)
          navigate('/Turmas', {state: 'Sala cadastrada com sucesso!'})
      })
      .catch((error)=>{
          console.log(error)
      })
  }


  

  return (
    <div style={{ backgroundColor: '#333', color: 'white', minHeight: '100vh' }}>
      <Menu />
      <Container sx={{ paddingTop: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={logo} alt="Descrição da imagem" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <form onSubmit={handleSubmit}>

          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', mb: 5 }}>Cadastro de Turma</Typography>


          <Typography>Digite um nome para a turma :</Typography>
          <Input
            type='text'
            id="NomeTurma"
            placeholder='Digite o nome da turma'
            handlerOnChange={handleItens}
          />
            <Typography sx={{mt: 3}}>Selecione a sigla da turma :</Typography>
            <Select
              id="turmas"
              options={itens}
              label="Siglas das turmas"
              handlerOnChange={handleClassroom}
            />
            <div style={{ textAlign: 'center' }}>
            <Btn type="submit" >Cadastrar Turma</Btn>
            </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Cadastrar;
