
import UserService from '../services/user.service'
import { User } from '../model/user.model';
import * as HttpStatusCode from 'http-status-codes';


export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    this.register = this.register.bind(this);
  }

  async register(request: any, response: any) {
    try {
      const result = await this.userService.register(request.body as User);
      response.send(result);
    } catch (ex) {
      console.log(ex);
      response.status(HttpStatusCode.BAD_REQUEST).send(ex);
    }
  }
}