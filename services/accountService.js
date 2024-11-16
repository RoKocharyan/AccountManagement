import accountModel from "../models/accountModel.js";

class AccountService {
  async createAccount(accountId, payload) {
    try {
      const existingAccount = await accountModel.findOne({ accountId });
      if (existingAccount) {
        return existingAccount;
      }
      const data = { accountId, ...payload }; // Merge accountId with the payload
      console.log(data);
      const account = new accountModel(data);
      await account.save();
      return account;
    } catch (error) {
      throw new Error("Failed to create Account: " + error.message);
    }
  }

  async getAccount(accountId) {
    try {
      const account = await accountModel.findOne({ accountId });
      return account;
    } catch (error) {
      throw new Error("Failed to find account: " + error.message);
    }
  }

  async deleteAccount(accountId) {
    try {
      await accountModel.deleteOne({ accountId });
      const accounts = await accountModel.find({ accountId });
      return accounts;
    } catch (error) {
      throw new Error("Failed to remove account: " + error.message);
    }
  }

  async updateAccount(accountId, payload) {
    try {
      const account = await accountModel.findOne({ accountId });
      if (!account) {
        throw new Error("Account not found");
      }
      Object.assign(account, payload); // Update account with payload properties
      await account.save();
      return account;
    } catch (error) {
      throw new Error("Failed to update account: " + error.message);
    }
  }
}

export default new AccountService();
