import React from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Paper } from '@mui/material';
import { updateSearchString } from '../../redux/actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default Search;
