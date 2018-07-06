const config = {
    // eslint-disable-next-line
    PORT: process.env.PORT || 1234,
    APP_SECRET: 'topsecret',
    DB_NAME: 'blog-system',
    DB_CONNECTION_STRING: 'mongodb://localhost:27017/blog-system',
};

module.exports = config;
