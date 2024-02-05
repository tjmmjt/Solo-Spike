// import * as React from "react";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Input, Typography } from "@mui/material";
// import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";

function AddCustomLEGO() {
  // local state to store image file
  const [file, setFile] = useState();

  const handlePost = async (event) => {
    event.preventDefault();
    // use formData to store multipart form-data
    const formData = new FormData();
    // append "image" with file
    formData.append("image", file);
    console.log(event.target.files);
    // make post with form data, headers declare content type =
    // as multipart form data
    await axios.post('/api/addlegoimage', formData, {
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
        {/* set input type to file, 
        then onchange have callback function to setFile to event.target.files at the 0 index, 
        only accept images? */}
        <input type="file" onChange={event => setFile(event.target.files[0])} accept="image/*" />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}

// const submit = async event => {
//   event.preventDefault()

//   const formData = new FormData();
//   formData.append("image", file)
//   formData.append("caption", caption)
//   await axios.post("/api/posts", formData, { headers: {'Content-Type': 'multipart/form-data'}})
// }

// return (
//    <form onSubmit={submit}>
//      <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*"></input>
//      <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
//      <button type="submit">Submit</button>
//    </form>
// )

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
