const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

//dummy data
var songs = [
    {name: 'Thriller', genre:'Pop', id:'1'},
    {name: 'EverLong', genre:'rock', id:'2'},
    {name: 'Around The World', genre:'Electronic', id:'3'}
];

//dummy data
var artists = [
    {name: 'Michael Jackson', age:50, id:'1'},
    {name: 'Dave Grohl', age:51, id:'2'},
    {name: 'Daft Punk', genre:45, id:'3'}
]

const SongType = new GraphQLObjectType({
    name: 'Song',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const ArtistType = new GraphQLObjectType({
    name: 'Artist',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
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
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})