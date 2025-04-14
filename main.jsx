import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./src/store/index.js"

import './index.css'
import App from './src/App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
       <App /> 
      </Provider>
    </Router>
  </StrictMode>
)