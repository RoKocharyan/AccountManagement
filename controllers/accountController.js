import accountService from "../services/accountService.js";

class AccountController {
  async createAccount(req, res) {
    const accountId = req.params.id;
    const payload = req.body.url;
    try {
      const account = await accountService.createAccount(accountId, payload);
      res.json({ account });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAccount(req, res) {
    const accountId = req.params.id;
    try {
      const account = await accountService.getAccount(accountId);
      res.json({ account });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteAccount(req, res) {
    const accountId = req.params.id;
    try {
      const accounts = await accountService.deleteAccount(accountId);
      res.json({ accounts });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateAccount(req, res) {
    const accountId = req.params.id;
    const payload = req.body.url;
    try {
      const account = await accountService.updateAccount(accountId, payload);
      res.json({ account });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AccountController();
