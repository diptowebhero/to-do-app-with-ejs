//dependencies
const express = require("express");
const PORT = process.env.PORT || 5000;
// app initialize
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

//array data
let pLanguages = [];

//application route
app.get("/", (req, res) => {
  res.render("index", { pLanguages });
});

app.post("/", (req, res) => {
  const pLanguage = req.body.pLanguage;
  pLanguages.push(pLanguage);
  res.redirect("/");
});

//listening port 5000
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
