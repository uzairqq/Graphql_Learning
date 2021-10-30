import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';


const app = express();
const PORT = 4002;

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Message',
        fields: () => ({
            messageName: {
                type: GraphQLString,
                resolve: () => 'My Name Is Uzair'
            }
        })

    })
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Application Listening on Port ${PORT}`));
