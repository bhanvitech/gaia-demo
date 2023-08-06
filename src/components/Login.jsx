import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

const Login = ({ handleChange }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lavendarblush',
        minHeight: '100vh',
      }}>
      <Paper sx={{ width: 'fit-content' }} elevation={5}>
        <Container
          component='main'
          maxWidth='xs'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}>
          <CssBaseline />
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h2' variant='h5' sx={{ marginBottom: '20px' }}>
            Login
          </Typography>
          <form onSubmit={() => {}}>
            <TextField
              size='small'
              className='textbox'
              fullWidth
              id='email'
              name='email'
              label='Email'
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              fullWidth
              size='small'
              id='password'
              name='password'
              label='Password'
              type='password'
              sx={{ marginBottom: '20px' }}
            />
            <Button variant='contained' fullWidth type='submit'>
              Login
            </Button>
          </form>
        </Container>
      </Paper>
    </Box>
  );
};

export default Login;
