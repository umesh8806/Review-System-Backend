import { createAdmin, createAlumni, createStudent,getAllUsers } from "../controllers/userController.js";
import { createCompany,getCompanies } from "../controllers/companyController.js";
import { createReview,getAllReviews } from "../controllers/reviewsController.js";
import { likeReviews } from "../controllers/likesController.js";
import express from "express";
import { isAdmin }from "../middleware/Middleware.js"

const router = express.Router()

router.use(express.json());

// Existing route to create an Admin user
router.post("/admin/create", createAdmin);

// New route to create an Alumni user
router.post("/alumni/create", createAlumni);

// New route to create a Student user
router.post("/student/create", createStudent);

//new create company
router.post("/company/create",isAdmin, createCompany);


//get user
router.get("/user/get",getAllUsers)

router.get("/company/get",getCompanies)


//rewiew create
router.post("/review/create",createReview);

router.get("/company/getAll",getAllReviews)

router.post("/like/add",likeReviews);

export default router;



