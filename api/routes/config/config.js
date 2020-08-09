require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

const config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    database: process.env.DATABASE,
    collection: process.env.COLLECTION,
    mongoAtlasConnectionString: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@databases.j2me1.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`
};
console.log(config);
module.exports = config;
