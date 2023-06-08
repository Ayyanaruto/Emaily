if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "/home/Ayyan/Desktop/Project-Emaily/.env",
  });
}
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoStore = require("connect-mongo");
require("./models/user");
require("./models/survey");
require("./services/passport");
const dbUrl = process.env.MONGO_DB_URI || "mongodb://localhost:27017/Emaily";
mongoose.connect(dbUrl).then(() => {
  console.log("Database Connected");
});
const app = express();
app.use(bodyParser.json());
app.use(
  session({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: process.env.SECRET,
    saveUninitialized: true,
    store: mongoStore.create({
      mongoUrl: process.env.MONGO_DB_URI || "mongodb://localhost:27017/Emaily",
      ttl: 14 * 24 * 60 * 60, // = 14 days. Default
    }),
    saveUninitialized:false
  })
);
app.use(passport.initialize());
app.use(passport.session());
const auth = require("./routes/authRoutes");
const userApi = require("./routes/userApi");
const billing = require("./routes/billingRoutes");
const survey=require("./routes/surveyRoutes")

app.use("/auth/google", auth);
app.use("/api", userApi, billing,survey);

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  //like our main.js file or main.css file

  app.use(express.static("client/build"));

  //Express will serve up the index.html file
  //if it doesn;t recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
