// import * as React from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Input, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";

function AddCustomLEGO() {
  const [file, setFile] = useState();

  const handlePost = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    console.log(event.target.files);
    await axios.post("/api/addlegoimage", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <Box
      component="section"
      sx={{
        boxShadow: 3,
        p: 5,
        border: "1px solid grey",
        borderRadius: 3,
        bgcolor: "white",
      }}
    >
      <form onSubmit={handlePost}>
        <input type="file" onChange={setFile} accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}

// {/* <Box
//       component="form"
//       sx={{
//         boxShadow: 3,
//         p: 5,
//         border: "1px solid grey",
//         borderRadius: 3,
//         bgcolor: "white",
//       }}
//     >
//       <Typography variant="h4" component="h2" fontWeight="bold" sx={{ my: 2 }}>
//         Add a Custom LEGO Set
//       </Typography>

//       <Box
//         sx={{
//           display: "flex",
//           flexdirection: "row",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Input type="file" onChange={setFile} accept="image/*" sx={{ mx: 3 }} />

//         <Button variant="contained" size="medium" onClick={handlePost}>
//           Upload
//         </Button>
//         <img src={file} />
//       </Box>
//     </Box> */}

export default AddCustomLEGO;
