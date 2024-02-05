import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './index.css'
// import { createTheme, ThemeProvider } from '@mui/material'
// import { Provider } from 'react-redux'

// const theme = createTheme({



// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider> */}
     <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
