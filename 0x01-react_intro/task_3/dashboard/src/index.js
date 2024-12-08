import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <div className="root-notifications">
            <Notifications />
        </div>
        <App />
    </>
);