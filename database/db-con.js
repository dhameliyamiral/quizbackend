// require('dotenv').config();
// const mongoose = require('mongoose');

// const url = process.env.MONGO_URL;
// console.log(url);

// const databaseConnection = mongoose.connect(url)
//     .then(() => {
//         console.log("DB connect")
//     })
//     .catch(() => {
//         console.log("DB failed")
//     })

// module.exports = databaseConnection;
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

const databaseConnection = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.error("DB connection failed:", err);
});

module.exports = databaseConnection;
