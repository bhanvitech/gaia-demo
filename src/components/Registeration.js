import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';

import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterationSchema } from '../utils/Validations';

const RegistrationForm = () => {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const initialValues = {
    name: '',
    email: '',
    password: '',
    mobile: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: RegisterationSchema,
    onSubmit: (values) => {
      setIsRegistered(true);

      setTimeout(() => {
        setIsRegistered(false);
        navigate('./login');
      }, 1000);
    },
  });

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              size='small'
              id='name'
              name='name'
              label='Full Name'
              type='name'
              sx={{ marginBottom: '20px' }}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              size='small'
              className='textbox'
              fullWidth
              id='email'
              name='email'
              label='Email'
              sx={{ marginBottom: '20px' }}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              size='small'
              className='textbox'
              fullWidth
              id='password'
              name='password'
              label='Password'
              type='password'
              value={formik.values.password}
              sx={{ marginBottom: '20px' }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
              size='small'
              className='textbox'
              fullWidth
              id='mobile'
              name='mobile'
              label='Mobile No'
              type='text'
              value={formik.values.mobile}
              sx={{ marginBottom: '20px' }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
            <Button variant='contained' fullWidth type='submit'>
              Submit
            </Button>
          </form>
        </Container>

        {isRegistered && (
          <Snackbar
            open={isRegistered}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={6000}
            onClose={() => setIsRegistered(false)}>
            <Alert
              onClose={() => setIsRegistered(false)}
              severity='success'
              sx={{ width: '100%' }}>
              Registered Successfully
            </Alert>
          </Snackbar>
        )}
      </Paper>
    </Box>
  );
};

export default RegistrationForm;
