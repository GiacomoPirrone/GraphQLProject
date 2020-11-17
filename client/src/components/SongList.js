import {useQuery} from '@apollo/client';
import {getSongsQuery} from '../queries/queries';
import React, {useState} from 'react';
import '../index.css';

//Components
import SongDetails from './SongDetails';

function SongList(){

    const {loading, error, data} = useQuery(getSongsQuery);

    const[selected, setSelected] = useState("");

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Oops! Something went wrong</p>;

    else {
        return (
            <div class="container song-container">
                <div className="columns">
                    {data.songs.map((song) => (
                        <div className="column col-2 popover popover-bottom">
                            <div className="songs-content" key={song.id}>{song.name}</div>
                                <div class="popover-container">
                                    <div className="card">
                                        <div className="card-header">
                                            {song.name}
                                        </div>
                                    <div className="card-body">
                                        By: {song.artist.name}<br/>
                                        Genre: {song.genre}<br/><br/>
                                        Other Songs by Artist:
                                        <ul>
                                            {song.artist.songs.slice(0,3).map((song)=> (
                                                <li>{song.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        {/*nothing here as of yet*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
  
export default SongList;