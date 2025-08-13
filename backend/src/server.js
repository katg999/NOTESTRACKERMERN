import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
 

dotenv.config(); // Load environment variables from .env file

 

const app = express();
const PORT = process.env.PORT || 5001;

//What is an endpoint?
//an endpoitn is a combination of a URL + HTTP method that lets a client interact with a specific resource.


//middleware 
app.use(cors({
    origin: "http://localhost:5173", // use http, not https unless you have SSL locally
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
})); 

app.use(express.json());  // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

app.use("/api/notes", notesRoutes); 
 
connectDB().then(
    () => {
        app.listen(PORT, () => {

            console.log("Server is running on port ", PORT);
        });

    }
)

