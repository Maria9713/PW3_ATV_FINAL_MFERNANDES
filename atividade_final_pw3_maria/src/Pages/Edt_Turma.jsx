import React, { useState, useEffect } from 'react';
import Menu from '../Components/Menu';
import { Typography, Container, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import logo from '../img/logo5.png';
import SelectSala from '../Components/Select';
import Input from '../Components/input';
import Btn from '../Components/Btn';

const Edt_turma = () => {
    const [itens, setItens] = useState([]);

    const { id } = useParams();
    console.log('ID: ' + id);

    const navigate = useNavigate();

    const [sala, setSala] = useState({ NomeTurma: '', category: { id: '', category: '' } });

    useEffect(() => {
        fetch('http://localhost:5000/Siglas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json()).then((data) => {
            setItens(data);
            console.log(data);
        }).catch((error) => {
            console.log(`Não foi possível fazer o fetch do conteúdo: ${error}`);
        });
    }, []);

    useEffect(() => {
        fetch(`http://localhost:5000/Turmas/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setSala(data);
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    function handleItens(event) {
        if (!event || !event.target) {
            console.error("O event ou event.target está undefined", event);
            return;
        }

        const { name, value } = event.target;
        if (!name) {
            console.error("O event.target.name está undefined", event.target);
            return;
        }

        const categoryText = event.target.options[event.target.selectedIndex].text;

        console.log("Name:", name, "Value:", value, "Category Text:", categoryText);
        setSala(prevSala => ({ ...prevSala, category: { id: value, category: categoryText } }));
    }

    function handleClassroom(event) {
        if (!event || !event.target) {
            console.error("O event ou event.target está undefined", event);
            return;
        }

        const { id, value } = event.target;
        if (!id) {
            console.error("O event.target.id está undefined", event.target);
            return;
        }

        console.log("ID:", id, "Value:", value);
        setSala(prevSala => ({ ...prevSala, [id]: value }));
    }

    function editSala(turma) {
        fetch(`http://localhost:5000/Turmas/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(turma)
        })
        .then((resp) => resp.json())
        .then(() => {
            navigate('/Turmas', { state: 'Turma alterada com sucesso!' });
        })
        .catch((err) => console.log(err));
    }

    function submit(event) {
        event.preventDefault();
        editSala(sala);
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
                        <form onSubmit={submit}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', mb: 5 }}>Editar Turma</Typography>
                            <Typography>Digite um nome para a turma :</Typography>
                            <Input
                                type='text'
                                id="NomeTurma"
                                placeholder='Digite o nome da turma'
                                value={sala.NomeTurma}
                                onChange={handleClassroom}
                            />
                            <Typography sx={{ mt: 3 }}>Selecione a sigla da turma :</Typography>
                            <SelectSala
                                id="turmas"
                                name="turmas"
                                options={itens}
                                text="Selecione"
                                label="Siglas das turmas"
                                handlerOnChange={handleItens}
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Btn type="submit">Editar Turma</Btn>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Edt_turma;
