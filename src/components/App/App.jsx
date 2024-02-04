import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import AddLEGO from '../AddLEGO/AddLEGO'


function App() {


  return (
    <>
      <Container sx={{display: 'flex', justifyContent: 'center'}}>
        <AddLEGO />
      </Container>
    </>
  )
}

export default App
