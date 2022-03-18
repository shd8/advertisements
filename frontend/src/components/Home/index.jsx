import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

const Home = () => (
  <Link to="/" className="home-icon">
    <IconButton
      sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
      aria-label="Home"
    >
      <HomeIcon sx={{ fontSize: 40 }} />
    </IconButton>
  </Link>
);

export default Home;
