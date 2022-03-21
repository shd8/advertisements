import React from 'react';
import {
  AppBar, Toolbar, Container, IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Home from '../Home';

const NavBar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Home />
        <Link to="new">
          <IconButton sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
            <AddBoxIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
