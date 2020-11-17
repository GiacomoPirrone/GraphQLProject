import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

//components
import SongList from './components/SongList';
import AddSong from './components/AddSong';

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
        <AddSong/>
      </div>
    </ApolloProvider>
  );
}

export default App;
