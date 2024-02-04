import { Box, Grid, InputLabel, TextField, Typography } from "@mui/material";

function AddLEGO() {
  return (
    <Box
      component="section"
      sx={{
        boxShadow: 3,
        p: 3,
        border: "1px solid grey",
        borderRadius: 3,
        bgcolor: "white"
      }}
    >
      <Typography variant="h4" component="h2" fontWeight="bold">
        ADD LEGO SET
      </Typography>

      <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
        />
       

    </Box>
  );
}

export default AddLEGO;
