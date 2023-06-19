//console.clear();
const express = require("express");
const DBconnect = require("./Configuration/DbConnect");
const cors = require("cors");
//importing passport
const passport = require("passport");
const app = express();

require("dotenv").config();
//connect database

DBconnect();
app.use(cors());
app.use(express.json());

//routes
app.use("/user/", require("./routes/UserRouter"));

app.use("/quiz/", require("./routes/QuizRouter"));

//running passport
app.use(passport.initialize());

//lisnen Port
const port = process.env.PORT;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running in port ${port}`);
});
