import {getSongQuery} from '../queries/queries';
import {useQuery} from '@apollo/client';


const displaySongDetails = (loading, data, error) =>{
    if(loading) return <p>loading...</p>
    if(error) return <p>Song not selected yet...</p>
    if(data.song){
        return(
            <div id="song-details">
                <h2>{data.song.name}</h2>
                <p>{data.song.genre}</p>
                <p>{data.song.artist.name}</p>
                <p>All the songs by the artist:</p>
                <ul className="other-songs">
                    {data.song.artist.songs.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                    }
                </ul>
                <button onClick={() => {document.getElementById("song-details").style.display="none"}}>Close Details</button>
            </div>
        )
    }else{
        return(
            <div>
                Song not selected yet...
            </div>
        )
    }
}

function SongDetails(props) {

    
    const {loading, error, data} = useQuery(getSongQuery, {
        variables: { 
            id: props.songId 
        }
    });

    return (
        <div id="book-details">    
            {displaySongDetails(loading, data, error)}
        </div>
    )
}

export default SongDetails;