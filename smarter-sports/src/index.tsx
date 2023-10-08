import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { ThemeProvider } from "./context/theme.js";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)