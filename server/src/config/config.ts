const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            maxPoolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: 'mongodb+srv://CodingMirec:Sp412250@cluster0.4ccll.mongodb.net/blog-mern'
    },
    server: {
        host: 'localhost',
        port: 1337
    }
};

export default config;
