const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDatabase = require("./database/database");


dotenv.config();

connectDatabase();
app.use(express.json());

const PORT = process.env.PORT;
app.use("/api/user", require("./routes/userRoutes"));

app.use("/api/reservation", require("./routes/reservationRoutes"));
app.use("/api/appointment", require("./routes/appointmentRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`The server is successfully running on  ${PORT}`);
});