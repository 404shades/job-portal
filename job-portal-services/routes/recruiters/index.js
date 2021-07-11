const express = require("express");
const recruiterController = require("../../controllers/recruiter/recruiter.controller")

const router = express.Router();

router.post("/register", recruiterController.registerRecruiter);

router.post("/login",recruiterController.signInRecruiter)

module.exports = router;
