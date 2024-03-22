import express from "express";
import colors from "colors";

import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

//configure env
dotenv.config();

//database  config
connectDB();

//rest object
const app = express();

// ******
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//PORT
const PORT = process.env.PORT || 8081;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode port ${PORT}`.bgCyan
      .white
  );
});

//TRANSLATIONS
app.get("/translations/:lang", (req, res) => {
  const lang = req.params.lang;

  //language location
  const filePath = path.join(
    __dirname,
    "translations",
    `${lang.split("-")[0]}.json`
  );
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "Translation File is not found!!" });
    }
    try {
      const jsonData = JSON.parse(data);
      res.set("Cache-control", "public,max-age=3600");
      res.json(jsonData);
    } catch (parseError) {
      res.status(500).json({
        error: "Error in parsing translation file",
      });
    }
  });
});
