import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
  document.body.innerHTML = '<h1 style="color: red; text-align: center; padding: 50px;">CRITICAL ERROR: Root element not found</h1>';
}
