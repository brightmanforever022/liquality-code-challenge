import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import MarketTable from './components/MarketTable/MarketTable';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketTable />
    </QueryClientProvider>
  );
}

export default App;
