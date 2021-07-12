const express = require("express");
const recruiterController = require("../../controllers/recruiter/recruiter.controller");
const jobsController = require("../../controllers/jobs/index")

const jwtAuthMiddleware = require('../../middlewares/authentication/jwt_token')
const isRecruiterMiddleware = require("../../middlewares/authentication/is_recruiter");

const router = express.Router();

router.post("/register", recruiterController.registerRecruiter);

router.post("/login",recruiterController.signInRecruiter);
router.post("/loginThroughToken",jwtAuthMiddleware,isRecruiterMiddleware,recruiterController.signInRecruiterThroughToken)
router.get("/getJobApplicantsOfJobs",jwtAuthMiddleware,isRecruiterMiddleware,jobsController.getJobApplicantsByJobId)
module.exports = router;
