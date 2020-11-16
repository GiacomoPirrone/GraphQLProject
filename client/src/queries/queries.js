import {gql} from '@apollo/client';

const getArtistsQuery = gql`
    {
        artists {
            name
            id
        }
    }
`
const getSongsQuery = gql`
    {
        songs {
            name
            id
        }
    }
`

export {getArtistsQuery, getSongsQuery};