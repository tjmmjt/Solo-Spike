import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

function AddLEGO() {
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch({type: 'API_FETCH_ID'})
  }

  return (
    <Box
      component="form"
      sx={{
        boxShadow: 3,
        p: 5,
        border: "1px solid grey",
        borderRadius: 3,
        bgcolor: "white"
      }}
    >

      <Typography variant="h4" component="h2" fontWeight="bold" sx={{my: 2}}>
          ADD LEGO SET
      </Typography>

      <Box sx={{display: 'flex', flexdirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TextField
          label="LEGO #"
          sx={{ mx: 2, width: '25ch'}}
        />

        <Button variant='contained' size='large'>Search</Button>
      </Box>

    </Box>
  );
}

export default AddLEGO;
