import { StrictMode } from 'react'; // React.StrictMode componente di controllo dei problemi di rendering
import { createRoot } from 'react-dom/client'; //creazione del root
import App from './App';
import './index.css';

const rootElement = document.getElementById('root'); //cerca nel DOM l'elemento con l'id "root"

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

//Crea un "root container" React, un oggetto che gestisce il rendering dei componenti all'interno dell'elemento rootElement.
const root = createRoot(rootElement);

//Renderizza l'applicazione.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);