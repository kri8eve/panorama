const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");
const app = express();
const ejs = require("ejs");
const hostname = "0.0.0.0";
const port = process.env.PORT || 8000;
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const bannerImages = [
    "images/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg",
    "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ];
  const restuarantImages = [
    "emy-XoByiBymX20-unsplash.jpg",
    "charlesdeluvio-D-vDQMTfAAU-unsplash.jpg",
    "brooke-lark-M4E7X3z80PQ-unsplash.jpg",
    "alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
  ];
  const waterparkImages = [
    "yianni-mathioudakis-JK1TD9Sp5kY-unsplash.jpg",
    "jeremiah-lawrence-QBN_X4H0x9U-unsplash.jpg",
    "aquavera-KzUAW2htbiI-unsplash.jpg",
    "vince-fleming--gwECgLmmU8-unsplash.jpg",
  ];
  const services = [
    {
      imageUrl :'images/multicuisineRestuarant.jpg',
      title:'Multi-Cuisine Restuarant'
    },
    {
      imageUrl :'images/amusementPark.png',
      title:'Amusement Park'
    },
    {
      imageUrl :'images/gymFitness.jpg',
      title:'Gym & Fitness'
    },
    {
      imageUrl :'images/banquet.jpg',
      title:'Banquet Hall'
    },
    {
      imageUrl :'images/wedding-mandap-taiyaari-shuru.jpg',
      title:'Events (Marriage/Corporate)'
    },
  ]
  
  return res.render("index", {
    title: "Panorama",
    layout: "./layouts/main",
    waterparkImages,
    restuarantImages,
    bannerImages,
    services
  });
});
app.get("/contact", (req, res) => {
  return res.render("contact", {
    title: "Contact Us- Panorama",
    layout: "./layouts/main",
  });
});
app.use("/rooms", require("./src/router/rooms"));
app.listen(port, hostname, () => {
  console.log(`Server is running at ${port}`);
});
