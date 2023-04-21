const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/kudos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('successfully connect with database.');
}).catch((e) => {
    console.log(`error ` + e);
})