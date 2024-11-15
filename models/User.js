import mongoose from "mongoose";

// Define a new schema (structure) for the User model
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // Define a field 'role' that should be a string and must be one of the values in the array. Only these values  ["Admin", "Alumni", "Student"] are allowed for 'role'
    role: {
      type: String,
      enum: ["Admin", "Alumni", "Student"],
      required: true,
    },
  });
  
  // Create a model named 'User' based on the schema defined above
  const userModel = mongoose.model("User", userSchema);
  
  // Export the 'userModel' so it can be used in other parts of the application
  export default userModel;