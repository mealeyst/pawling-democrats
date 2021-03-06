import 'dotenv/config'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.body
)
