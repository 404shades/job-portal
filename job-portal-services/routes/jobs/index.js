const express = require("express");
const jwtAuthMiddleware = require('../../middlewares/authentication/jwt_token')
const isRecruiterMiddleware = require("../../middlewares/authentication/is_recruiter");
const JobsController = require("../../controllers/jobs")
const router = express.Router();


router.post("/createJob",jwtAuthMiddleware,isRecruiterMiddleware,JobsController.createJob);
router.get("/allJobs",jwtAuthMiddleware,JobsController.getAllJobs)

module.exports = router;