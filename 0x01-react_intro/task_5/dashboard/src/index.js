import { createRoot } from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications'

const root = createRoot(document.getElementById('root'));
root.render(
    <>
        <div className="root-notifications">
            <Notifications />
        </div>
        <App />
    </>
);