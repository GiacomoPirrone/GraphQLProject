import {useQuery, useMutation} from '@apollo/client';
//import {flowRight as compose} from 'lodash';
import {getArtistsQuery, addSongMutation, getSongsQuery} from '../queries/queries';
import React, {useState} from 'react';

const displayArtists = (loading, data, error) =>{

    if(loading) return <option disabled>Loading Artists</option>;
    if(error) return <option disabled>Oops! Something went wrong</option>;
    else{
        return data.artists.map(artist => {
            return(<option key={artist.id} value={artist.id}>{artist.name}</option>)
        })
    }

}

function AddSong(){

    const[name, setName] = useState("");
    const[genre, setGenre] = useState("");
    const[artistId, setArtistId] = useState("");
    const {loading, error, data} = useQuery(getArtistsQuery);
    const [addSongMut] = useMutation(addSongMutation);

    const handleSubmit = (e) => {
        e.preventDefault();
        addSongMut({
            variables: {
                name: name,
                genre: genre,
                artistId: artistId
            },
            refetchQueries: [{ query: getSongsQuery}]
        });

    }

    return (
        <form id="add-song" onSubmit={handleSubmit}>

            <div className="field">
                <label>Song name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
            </div>

            <div className="field">
                <label>Artist:</label>
                <select value ={artistId} onChange={(e) => setArtistId(e.target.value)} >
                    <option>Select author</option>
                    {displayArtists(loading, data, error)}
                </select>
            </div>

            <button>+</button>
        </form>
    );
}
  
export default AddSong;
