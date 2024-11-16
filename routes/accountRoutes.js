import accountController from "../controllers/accountController.js";
import express from "express";
const accountRouter = express.Router();

accountRouter.get("/:id", accountController.getAccount);
accountRouter.post("/:id", accountController.createAccount);
accountRouter.put("/:id", accountController.updateAccount);
accountRouter.delete("/:id", accountController.deleteAccount);

export default accountRouter;
