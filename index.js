import express from "express";
import cors from "cors";
import db from "./models/dbConnection.js"
import accountRouter from "./routes/accountRoutes.js"

const corsOptions = {origin: "http://localhost:8081"}    
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/account", accountRouter);

app.get("/", (req, res) => {
    
    res.json({ message: "Welcome to bezkoder application." });
});
// app.post("/:id", (req,res) => {
//     console.log(req.params.)
//     console.log(req.body)
//     res.send("ok")
// })

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});

db.mongoose
  .connect(db.url, {
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });