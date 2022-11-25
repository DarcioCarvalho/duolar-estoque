import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import { Router } from './Router';

import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Router />
      </SearchProvider>
    </BrowserRouter>
  );
}

