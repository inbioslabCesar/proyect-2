import { createRoot } from 'react-dom/client';
import './index.css';

const app = (
	<div>
		<h1>Curso de react</h1>
		<button>Acceder</button>
	</div>
);
const container = document.getElementById('root');

createRoot(container).render(app);
