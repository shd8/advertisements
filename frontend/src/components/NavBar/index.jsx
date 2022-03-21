import React from 'react';
import { useDispatch } from 'react-redux';
import {
  AppBar, Toolbar, Container, IconButton, InputBase, Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import Home from '../Home';
import { updateSearchString } from '../../redux/actions/actions';

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Home />
          <Paper
            component="form"
            sx={{
              p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search an Ad"
              onChange={(event) => dispatch(updateSearchString(event.target.value))}
              inputProps={{ 'aria-label': 'search google maps' }}
            />

            <SearchIcon sx={{ p: '10px' }} />
          </Paper>
          <Link to="new">
            <IconButton sx={{ color: 'rgba(0, 0, 0, 0.54)' }}>
              <AddBoxIcon sx={{ color: 'white' }} />
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
