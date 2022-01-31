import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://8080-fernan81-ctainvoice-ox28brdacqw.ws-eu29.gitpod.io/v1/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);