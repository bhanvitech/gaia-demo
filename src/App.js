import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Login from './components/Login';
import RegistrationForm from './components/Registeration';

const defaultTheme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
