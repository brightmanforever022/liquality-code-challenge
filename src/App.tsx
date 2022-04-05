import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import MarketPage from './components/MarketPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketPage />
    </QueryClientProvider>
  );
}

export default App;
