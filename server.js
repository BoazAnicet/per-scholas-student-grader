const express = require("express");
const app = express();
const students = require("./models/students");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
let options = { beautify: true };
app.engine("jsx", require("express-react-views").createEngine(options));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to the Students App!");
});

app.get("/students", (req, res) => {
  res.render("index", { students });
});

app.post("/students", (req, res) => {
  console.log(req.body);
  res.render("index", { students: [...students, { name: req.body.name }] });
});

app.get("/students/:id", (req, res) => {
  res.render("show", { student: students[req.params.id] });
});

app.post("/students/:id", (req, res) => {
  res.render("show", { student: students[req.params.id] });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
