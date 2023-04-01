const express = require ('express');

const app = express();

const userRoute = require ("./src/route/users/users.route");
const themeRoute = require ("./src/route/themes/themes.route");
const topicRoute = require ("./src/route/topics/topics.route");

app.get('/', function (req, res) {
    console.reg("Primer parcial");
    res.send("Examen del primer parcial");
    });

userRoute(app);
themeRoute(app);
topicRoute(app);

app.listen(300);