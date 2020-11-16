import {useQuery} from '@apollo/client';
import {getSongsQuery} from '../queries/queries';

function SongList(){

    const {loading, error, data} = useQuery(getSongsQuery);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Oops! Something went wrong</p>;
    
    //console.log(data);

    else {
        return (
            <>
            {data.songs.map((song, id) => (
                <li key={id}>{song.name}</li>
            ))}
            </>
        )
    }
}
  
export default SongList;