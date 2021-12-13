module.exports = {
    development: {
        PORT: 5000,
        dbUrl: 'mongodb://localhost:27017/gamePlay',
        dbAtlas:"mongodb+srv://niki:asdasd@cluster0.vbb8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        secret: 'mnogoqkaparola'
    },
    production: {
        PORT: 80
    }
}

