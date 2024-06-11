import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CardSala({ id, nomeSala, siglaSala, idSigla, handleDelete }) {

    function handlerSubmit(event) {
        event.preventDefault();
        handleDelete(id);
    }

    return (
        <Box id={id} sx={{ 
            border: '1px solid #ccc', 
            padding: '16px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
            marginBottom: '24px', 
            maxWidth: '600px', 
            margin: '0 auto' 
        }}>
            <Grid container alignItems="center">
                <Grid item xs={11} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="body1">Código:{id}</Typography>
                        <Typography variant="h4">{nomeSala}</Typography>
                        <Typography id={idSigla} variant="body1">Sala:{siglaSala}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                    <IconButton component={Link} to={`/Edt_Turma/${id}`} color="primary" style={{ color: '#FFF' }}>
                        <EditIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#FF0000' }} color="secondary" onClick={handlerSubmit}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}
