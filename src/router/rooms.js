const express = require("express");
const router = express.Router();
const rooms = [
  {
    roomId: 1,
    slug: "deluxe_room",
    roomType: "Deluxe Room",
    image: "vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg",
    features: {
      bed: 2,
      bathroom: 1,
      area: 90,
    },
  },
  {
    roomId: 2,
    slug: "super_deluxe_room",
    roomType: "Super Deluxe Room",
    image: "mark-champs-Id2IIl1jOB0-unsplash.jpg",
    features: {
      bed: 3,
      bathroom: 1,
      area: 90,
    },
  },
  {
    roomId: 3,
    slug: "suite_room",
    roomType: "Suite Room",
    image: "edelle-bruton-PJNO2sLlbB8-unsplash.jpg",
    features: {
      bed: 2,
      bathroom: 1,
      area: 120,
    },
  },
];
router.get("/", (req, res) => {
  return res.render("rooms", {
    title: "Rooms- Panorama",
    layout: "./layouts/main",
    rooms: rooms,
  });
});
router.get("/:roomid", (req, res) => {
  const { roomid } = req.params;
  const findRoom = rooms.filter((i) => i.slug == roomid);
  const temp = {
    ...findRoom[0],
  };
  return res.render("roomDetail", {
    title: `${roomid}- Panorama`,
    layout: "./layouts/main",
    room: temp,
  });
});

module.exports = router;
