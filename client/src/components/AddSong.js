import {useQuery} from '@apollo/client';
import {getArtistsQuery} from '../queries/queries';

function DisplayArtists(){

    const {loading, error, data} = useQuery(getArtistsQuery);
    if(loading) return <option disabled>Loading Artists</option>;
    if(error) return <option disabled>Oops! Something went wrong</option>;
    else{
        return data.artists.map(artist => {
            return(<option key={artist.id} value={artist.id}>{artist.name}</option>)
        })
    }

}

function AddSong(){

    return (
        <form id="add-song">

            <div className="field">
                <label>Song name:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>

            <div className="field">
                <label>Artist:</label>
                <select>
                    <option>Select author</option>
                    <DisplayArtists/>
                </select>
            </div>

            <button>+</button>
            
        </form>
    );
}
  
export default AddSong;
