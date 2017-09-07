const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

// TODO: look up--extended: false or true? Do I even need this anymore?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Override with POST
app.use(methodOverride("_method"));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./routes/api-routes")(app);

// app.use("/", routes);

db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port", PORT);
  });
});