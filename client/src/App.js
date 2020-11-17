import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import './index.css';

//components
import SongList from './components/SongList';
import AddSong from './components/AddSong';
import Header from './components/Header';

//apollo client setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <Header/>
        <SongList/>
        <AddSong/>
      </div>
    </ApolloProvider>
  );
}

export default App;
