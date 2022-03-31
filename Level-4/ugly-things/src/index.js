import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {MainProvider} from "./MainProvider"

const container = document.getElementById("root")

const root = createRoot(container)

root.render(
<MainProvider >
  <App />
</MainProvider>)

