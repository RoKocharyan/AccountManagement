import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  accountId : {type : Number},
  url : {type : String}
})

export default model("Accounts", accountSchema)