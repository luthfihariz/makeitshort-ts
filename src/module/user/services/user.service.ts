import UserModel, { User } from "../model/user.model"
import UserValidatorService from './user.validator.service';


export default class UserService {
  private userModel: UserModel;
  private validatorService: UserValidatorService;

  constructor() {
    this.userModel = new UserModel();
    this.validatorService = new UserValidatorService();
  }

  async register(user: User) {
    console.log(user);
    // check if data is valid
    const isValidData = await this.validatorService.isValidUserData(user)
    if(!isValidData) {
      return;
    }
    // check if user is registered
    const isUserHasNotRegistered = await this.validatorService.isUserHasNotRegistered(user.email)
    if(!isUserHasNotRegistered) {
      return;
    }

    // create user
    const registeredUser = await this.userModel.createUser(user);

    // return new user
    return registeredUser;
  }
}