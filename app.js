const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 8000;
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index", { title: "Panorama", layout: "./layouts/main" });
});
app.get("/contact", (req, res) => {
  return res.render("contact", {
    title: "Contact Us- Panorama",
    layout: "./layouts/main",
  });
});
app.use("/rooms", require("./src/router/rooms"));
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
