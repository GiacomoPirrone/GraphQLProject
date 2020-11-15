import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

//components
import SongList from './components/SongList';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Giacomo's Music List</h1>
        <SongList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
