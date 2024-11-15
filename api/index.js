// import express from "express";

// // Import dotenv to load environment variables from a .env file
// import dotenv from "dotenv";

// // Import the dbConnect function to establish a connection with the MongoDB database
// import dbConnect from "./config/database.js";

// // Import the createAdmin function from the userController to handle admin creation
// import { createAdmin} from "./controllers/userController.js";

// // Initialize an Express application
// const app = express();

// const PORT = 3000;

// // Use express.json() middleware to parse incoming JSON requests
// app.use(express.json())

// // Load environment variables from a .env file
// dotenv.config(); 

// // Call the dbConnect function to connect to the MongoDB database
// dbConnect();

// // Define a POST route to create an admin user, using the createAdmin controller
// app.post("/api/v1/admin/create",createAdmin);


// app.listen(PORT, () => {
//   console.log(`Server is running at port: ${PORT}`);
// });



//tasks
import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../routes/FeedbackRoutes.js";



const app = express();
const PORT = 3000;

//mounting api routes
app.use("/api/v1",router)

dotenv.config();
dbConnect();
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});









