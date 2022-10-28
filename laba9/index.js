const express = require("express");
const mongoose = require("mongoose");
const exphb = require("express-handlebars");
const compRoutes = require("./routes/comps")

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphb.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))

app.use(compRoutes)

async function start() {
    try {
        await mongoose.connect("mongodb+srv://root:root@cluster0.wewdemv.mongodb.net/comps", {
            useNewUrlParser: true,
            // useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log("server started");
        })
    } catch (error) {
        console.log(error)
    }
}

start();