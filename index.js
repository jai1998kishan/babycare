const express = require("express");

// 47min 06/02

const hbs = require("hbs");

const session = require("express-session");

require("dotenv").config();

const Router = require("./routes/index");

const app = express();

// express-session code from npm express-session
var sess = {
  secret: process.env.SESSION_SECRET_KEY,
  cookie: {},
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sess));

//End  express-session code from npm express-session

require("./db_connect");
require("./helpers");

app.set("view engine", "hbs");
app.use(express.static("views/static")); //use to server static files like css,js,images etc
app.use("/public", express.static("public"));
hbs.registerPartials("./views/partials");

app.use("/", Router);

let port = process.env.PORT || 8000;

app.listen(8000, () =>
  console.log(`Server is Running at http://localhost:${port}`)
);
