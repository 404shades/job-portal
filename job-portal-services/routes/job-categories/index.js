const express = require("express");
const jobCategoryController = require("../../controllers/job_categories")
const jwtAuthMiddleware = require('../../middlewares/authentication/jwt_token')

const router = express.Router();


router.get("/addFakeCategories",jobCategoryController.addFakeJobcategories);
router.get("/allAvailableCategories",jobCategoryController.getAllAvailableCategories)

module.exports  = router;