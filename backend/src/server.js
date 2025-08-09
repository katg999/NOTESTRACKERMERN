import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file



const app = express();
const PORT = process.env.PORT || 5001;

//What is an endpoint?
//an endpoitn is a combination of a URL + HTTP method that lets a client interact with a specific resource.
connectDB();

//middleware 
app.use(express.json());
app.use("/api/notes", notesRoutes); 
app.listen(PORT, () => {

    console.log("Server is running on port  ", PORT);
});