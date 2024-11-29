import express from 'express';
import dotenv from "dotenv";
import appRoutes from './routes/routes.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//for json parser
app.use(express.json());

//routes
app.use("/api", appRoutes);

app.get("/",(req, res)=> {
    res.status(200).send("Message Queue");
});

app.listen(PORT,()=>{
  console.log(`Server is running on Port ${PORT} !!`);
});