import { createRoot } from 'react-dom/client';
import App from './App/App';
import BodySection from './BodySection/BodySection';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
    </>
);
