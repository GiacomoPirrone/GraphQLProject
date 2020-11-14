const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

//dummy data
var songs = [
    {name: 'Thriller', genre:'Pop', id:'1', artistId:'1'},
    {name: 'EverLong', genre:'Rock', id:'2', artistId:'2'},
    {name: 'Around The World', genre:'Electronic', id:'3', artistId:'3'},
    {name: 'Pretender', genre:'Rock', id:'4', artistId:'2'},
    {name: 'Bad', genre:'Pop', id:'5', artistId:'1'},
    {name: 'Get Lucky', genre:'Electronic', id:'6', artistId:'3'},
];

//dummy data
var artists = [
    {name: 'Michael Jackson', age:50, id:'1'},
    {name: 'Dave Grohl', age:51, id:'2'},
    {name: 'Daft Punk', age:45, id:'3'}
]

const SongType = new GraphQLObjectType({
    name: 'Song',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        artist: {
            type: ArtistType,
            resolve(parent, args){
                console.log(parent);
                return _.find(artists, {id: parent.artistId});
            }
        }
    })
});

const ArtistType = new GraphQLObjectType({
    name: 'Artist',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        songs: {
            type: new GraphQLList(SongType),
            resolve(parent, args){
                return _.filter(songs, {artistId: parent.id});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        song: {
            type: SongType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args){
                return _.find(songs, {id: args.id});
            }
        },
        artist: {
            type: ArtistType,
            args: {id: {type: GraphQLID}},
            resolve(parent,args){
                return _.find(artists, {id: args.id});
            }
        },
        songs: {
            type: new GraphQLList(SongType),
            resolve(parent, args){
                return songs;
            }
        },
        artists: {
            type: new GraphQLList(ArtistType),
            resolve(parent, args){
                return artists;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})