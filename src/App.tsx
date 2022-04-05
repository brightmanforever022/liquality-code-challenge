import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import Header from './components/Shared/Header';
import MarketTable from './components/MarketTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <MarketTable />
    </QueryClientProvider>
  );
}

export default App;
