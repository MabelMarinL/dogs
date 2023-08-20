const { getName } = require("../controllers/getName.js");
const { getDogId } = require("../controllers/getDogId")
const { postDog } = require("../controllers/postDogs");
const { getTemperament } = require("../controllers/getTemperament");

const router = require("express").Router();


router.get("/dogs", getName);
router.get("/dogs/:id", getDogId);
router.post("/dogs", postDog);
router.get("/temperaments", getTemperament);


module.exports = router;