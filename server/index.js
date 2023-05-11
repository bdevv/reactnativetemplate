require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const morgan = require("morgan");
const app = express();
 mongoose
     .connect(process.env.MONGO_URI)
     .then(()=>console.log("DB Connected"))
     .catch((err) => console.log("DB CONNECTION ERROR:",err));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan("dev"));
app.use("/api",authRoutes);
app.listen(8000, ()=> console.log("Server running on port 8000"));