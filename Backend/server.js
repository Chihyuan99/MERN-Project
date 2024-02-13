require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use("/api/workouts", workoutRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database");
        app.listen(process.env.PORT, () => {
            console.log("Lisiting on port", process.env.PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
