const appointmentController = require("../controllers/appointmentController");
const router = require("express").Router();

router.post("/book", appointmentController.bookAppointment);

module.exports = router;