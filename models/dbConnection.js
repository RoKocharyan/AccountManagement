import dbConfig from "../config/dbConfig.js";
import mongoose from "mongoose";
import accountModel from "./accountModel.js";

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Accounts = accountModel;

export default db;
