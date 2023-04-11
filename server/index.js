if(process.env.NODE_ENV!=='production'){
  require("dotenv").config({
    path: "/home/Ayyan/Desktop/Project-Emaily/.env",
  });
}
const express = require("express");
const mongoose = require("mongoose");
const session=require("express-session")
const passport=require("passport")
require("./models/user");
require("./services/passport");
const dbUrl=process.env.MONGO_DB_URI||"mongodb://localhost:27017/Emaily"
mongoose.connect(dbUrl).then(() => {
  console.log("Database Connected");
});
const app = express();

app.use(session({
  maxAge:30*24*60*60*1000,
  secret:process.env.SECRET,
  saveUninitialized:true
}))
app.use(passport.initialize())
app.use(passport.session())
const auth = require("./routes/authRoutes");
const userApi=require("./routes/userApi")

app.use("/auth/google", auth);
app.use("/api",userApi)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
