import { createRoot } from 'react-dom/client';
import App from './app';

const root = createRoot(document.getElementById('root'));

// Первый рендер приложения
root.render(
  <App />
);
