
import DbCommonService from '../../../common/services/db.service';

export interface User {
  username: string;
  email: string;
  password: string;
}

export default class UserModel {

  private dbService: DbCommonService;
  private readonly tableUser = 'user';

  constructor() {
    this.dbService = new DbCommonService();
  }

  async getUserByCredential(email: string, password:string) {

  }

  async createUser(user: User) {
    const query = `INSERT INTO ${this.tableUser} SET ?`;
    const result = await this.dbService.query(query, user)
    return result;
  }

  async getUserByEmail(email: String) {
    const query = `SELECT id FROM ${this.tableUser} WHERE email = ?`;
    const result = await this.dbService.query(query, email);
    return result;
  }
}