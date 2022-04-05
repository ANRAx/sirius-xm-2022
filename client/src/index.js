import { createRoot } from 'react-dom/client';
import '../src/global/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
