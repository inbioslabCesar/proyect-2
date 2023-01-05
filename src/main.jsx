import { createRoot } from 'react-dom/client';
import App from './App';
import './style/index.css';

const container = document.getElementById('root');

createRoot(container).render(<App />);
