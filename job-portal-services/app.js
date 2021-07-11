const express = require("express");
const cors = require("cors");
const request_logger = require("./middlewares/request_logger/request_logger");
const error_logger = require("./middlewares/error_logger/error_logger");
const recruiterRoute = require("./routes/recruiters");
const jobsRoute = require("./routes/jobs")
const environment = require("./env-vars")
const app = express();
app.use(cors({ origin: environment.CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(request_logger);

const { sequelize } = require("./models");

app.use("/recruiter", recruiterRoute);
app.use("/jobs",jobsRoute)

app.use(error_logger);
const PORT = environment.PORT || 4500;
app.listen(PORT, async () => {
  console.log("Server started at ", PORT);
  await sequelize.sync()
});
