const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require("./schema/schema")
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

//allow cross-origin requests
app.use(cors());

//Connect to mlab database
mongoose.connect(
    "mongodb+srv://Giacomo:GiacomoEros19982001@gql-giacomo.b7wgj.mongodb.net/<GQL-Giacomo>?retryWrites=true&w=majority", 
    {useNewUrlParser: true, 
        useUnifiedTopology: true
    }
    );
mongoose.connection.once('open', () => {
    console.log("connected to database");
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});