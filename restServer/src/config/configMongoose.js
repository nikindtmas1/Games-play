const mongoose = require('mongoose');

const { development } = require('../config/config');
const connectStr = development.dbAtlas;

module.exports = (app) => {

    async function main(){

        await mongoose.connect(connectStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        console.log('Data base connected!');
    }
    main();

}