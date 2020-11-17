import {useQuery} from '@apollo/client';
import {getSongsQuery} from '../queries/queries';
import React, {useState} from 'react';

//Components
import SongDetails from './SongDetails';

function SongList(){

    const {loading, error, data} = useQuery(getSongsQuery);

    const[selected, setSelected] = useState("");

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Oops! Something went wrong</p>;

    else {
        return (
            <div>
                <ul id="song-list">
                    {data.songs.map((song) => (
                        <li key={song.id} onClick={(e) => setSelected(song.id)}>{song.name}</li>
                    ))}
                </ul>
                <SongDetails songId={selected}/>
            </div>
        )
    }
}
  
export default SongList;