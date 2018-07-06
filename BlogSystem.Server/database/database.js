const { MongoClient } = require('mongodb');

const init = (connectionString, dbName) => {
    return MongoClient
        .connect(connectionString, { useNewUrlParser: true })
        .then((client) => client.db(dbName));
};

module.exports = init;
