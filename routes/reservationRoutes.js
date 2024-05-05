const router = require("express").Router();
const reservationController = require("../controllers/reservationController");

router.post("/create", reservationController.addReservation);

module.exports = router;