const express = require('express');
const app = express();
require('dotenv').config();
const gameRouter = require('./router/gameRouter');

//Pour que le body de la requête soit un objet JSON
// on utilise la méthode express.json()
// qui permet de parser le body de la requête en format JSON
app.use(express.json());
const mongoose = require('mongoose');
// process.env.MONGO_URI
mongoose.connect(process.env.MONGO_URI).then((res) => {
    console.log('Connected to MongoDB');
    app.listen(process.env.SERVER_PORT, () => {
        console.log('Server is running on port 3000');
    });
    app.use("/game", gameRouter);
}).catch((err) => {
    console.log(err);
    console.log("Not connected to MongoDB");
});

