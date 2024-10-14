import accountModel from "../models/accountModel.js";

class AccountService {
  async createAccount(accountId, url) {
    try {
      const existingAccount = await accountModel.findOne({
        accountId: accountId,
      });
      if (existingAccount) {
        return existingAccount;
      }
      const data = { accountId, url };
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
      const account = await accountModel.findOne({ accountId: accountId });
      return account;
    } catch (error) {
      throw new Error("Failed to find account " + error.message);
    }
  }

  async deleteAccount(accountId) {
    try {
      await accountModel.deleteOne({ accountId: accountId });
      const accounts = await accountModel.find({ accountId: accountId });
      return accounts;
    } catch (error) {
      throw new Error("Failed to remove account " + error.message);
    }
  }

  async updateAccount(accountId, url) {
    try {
      const account = await accountModel.findOne({ accountId: accountId });
      account.url = url;
      await account.save();
      return account;
    } catch (error) {
      throw new Error("Failed to update account " + error.message);
    }
  }
}

export default new AccountService();
