import express from 'express';
import { graphqlHTTP } from 'express-graphql';


const app = express();
const PORT = 4002;

app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

app.listen(PORT, () => console.log(`Application Listening on Port ${PORT}`));
