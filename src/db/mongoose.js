const mongoose = require('mongoose');

const region = 'rsa';
let mongo_url = `${process.env.MONGODB_URL_PREFIX}${region}${process.env.MONGODB_URL_SUFFIX}`
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`MONGODB CONNECTED`)
}).catch(error => {
    console.log("Error", error);
})