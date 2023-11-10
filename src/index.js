import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/index.css';
import { RouterList } from './routes/RouterList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider>
  <Provider store={store}>
    <QueryClientProvider client={queryMovie}>
       
        <RouterList />
      
    </QueryClientProvider>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);