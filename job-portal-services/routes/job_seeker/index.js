const express = require("express");
const jobSeekerController = require("../../controllers/job_seeker/job_seeker");
const jwtAuthMiddleware = require('../../middlewares/authentication/jwt_token')

const isJobSeeker = require("../../middlewares/authentication/is_job_seeker");
const router = express.Router();


router.post("/register",jobSeekerController.registerJobSeeker)
router.post("/login",jobSeekerController.signInJobSeeker)

router.post("/applyJob",jwtAuthMiddleware,isJobSeeker,jobSeekerController.applyJob)

module.exports  = router;