import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import { Router } from './Router';

import './styles/global.css';

export default function App() {
  const basename = import.meta.env.DEV ? '' : '/duolar-estoque';

  return (
    <BrowserRouter basename={basename}>
      <SearchProvider>
        <Router />
      </SearchProvider>
    </BrowserRouter>
  );
}

