import UserModel, { User } from '../model/user.model';
import validator from '../../../common/services/validator.service'
import InternalError from '../../../common/type/error';
import ErrorCode from '../error/error.code'

export default class UserValidatorService {
  private userModel: UserModel;
  constructor() {
    this.userModel = new UserModel();
  }

  async isUserHasNotRegistered(email: string) : Promise<boolean> {
    const existingUser = await this.userModel.getUserByEmail(email);
    if (existingUser) {
      throw new InternalError(ErrorCode.USER_ALREADY_REGISTER);
    }

    return false;
  }

  async isValidUserData(user: User) : Promise<boolean> {
    const schema = {
      email: {
        type: 'email',
      },
      password: {
        type: 'string',
      },
      username: {
        type: 'string',
        min: 5,
        max: 20
      }
    }
    const isValidUserData = validator.validate(schema, user);
    if (isValidUserData) {
      return true;
    } else {
      throw new InternalError(ErrorCode.USER_INVALID_DATA)
    }
  }

}