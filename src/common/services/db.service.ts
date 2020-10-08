import DbConnection from '../db/db.common';


export default class DbCommonService {
  private dbConnection: DbConnection;

  constructor() {
     this.dbConnection = new DbConnection();
     this.query = this.query.bind(this);
  }

  async query(query: string, data: Object | []) {
    let connection;
    try {
      connection = await this.dbConnection.createConnection();
      const result = await connection.query(query, data);
      
      return result;
    } catch (ex) {
      // log query error here
      console.log("err", ex);
    } finally {
      await this.dbConnection.closeConnection(connection);
    }
  }

  async update(query: string, params: [string?] = []) {
    // update ?
  }
}