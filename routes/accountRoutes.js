import accountController from "../controllers/accountController.js";
import express from "express";
const chatRouter = express.Router();

chatRouter.get("/:id", accountController.getAccount);
chatRouter.post("/:id", accountController.createAccount);
chatRouter.put("/:id", accountController.updateAccount);
chatRouter.delete("/:id", accountController.deleteAccount);

export default chatRouter;
