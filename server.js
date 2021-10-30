import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';


const app = express();
const PORT = 4002;

const authors = [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' }
]

const books = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
    { id: 2, name: 'Harry Potter and the Prisoner of Azkaban', authorId: 1 },
    { id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
    { id: 4, name: 'The Fellowship of the Ring', authorId: 2 },
    { id: 5, name: 'The Two Towers', authorId: 2 },
    { id: 6, name: 'The Return of the King', authorId: 2 },
    { id: 7, name: 'The Way of Shadows', authorId: 3 },
    { id: 8, name: 'Beyond the Shadows', authorId: 3 }
]

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
