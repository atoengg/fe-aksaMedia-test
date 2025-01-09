import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { ThemeProvider } from './context/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Provider store={store}>
            <App />
          </Provider>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
