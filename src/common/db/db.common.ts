import config from '../../config'
import mysql from 'promise-mysql';

export default class DbConnection {

  constructor() {
    this.createConnection = this.createConnection.bind(this);
    this.closeConnection = this.closeConnection.bind(this);
  }

  async createConnection() {
    const configuration = {
      host: config.database.host,
      user: config.database.username,
      password: config.database.password,
      database: config.database.name
    }

    try {
      const pool = await mysql.createPool(configuration)
      return pool;
    } catch (ex) {
      // log connection error here
      throw ex;
    }
  }

  async closeConnection(connection: any) {
    try {
      await connection.end();
    } catch (ex) {
      // log fail to close connection here
    }
  }


}

