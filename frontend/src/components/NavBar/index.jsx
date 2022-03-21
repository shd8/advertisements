import React from 'react';
import {
  AppBar, Toolbar, Container, IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Home from '../Home';
import Search from '../Search';

const NavBar = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Home />
        <Search />
        <Link to="new">
          <IconButton sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
            <AddBoxIcon sx={{ color: 'white' }} />
          </IconButton>
        </Link>
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
