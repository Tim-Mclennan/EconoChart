import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js";
import { kpis } from "./data/data.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";


// CONFIGURATION
dotenv.config()
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use("/kpis", kpiRoutes)
app.use("/product", productRoutes);

// MONGOOSE
const PORT = process.env.PORT || 9000;

mongoose
    .connect(
        process.env.MONGO_URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )   
    .then(async () => {
        app.listen(PORT, () => console.log(`server port: ${PORT}`));

        //dropping the current database before updating it to avoid duplicate data:
        // await mongoose.connection.db.dropDatabase();

        // KPI.insertMany(kpis)
    })

    .catch((error) => console.log(`${error} did not connect`))