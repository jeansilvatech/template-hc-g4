const mysql = require('mysql');

const connect = () => {

  var config = {
    host: 'musculacao-db.cetjcgngktwh.sa-east-1.rds.amazonaws.com',
    user: 'bitsized-g4',
    password: 'bitsized-g4*',
    database: 'bitsized-g4',
    port: 3306,
  };

  const conn = new mysql.createConnection(config);

  conn.connect((err: any) => {
    if (err) {
      console.log("!!! Cannot connect !!! Error:");
      throw err;
    } else {
      console.log("Connection established.");
    }
  });

}

export default connect
