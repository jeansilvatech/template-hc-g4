const mysql = require('mysql');

const connect = () => {

  var config = {
    host: 'musculacao-db.cetjcgngktwh.sa-east-1.rds.amazonaws.com',
    user: 'musculacao_desenvolvimento',
    password: 'musculacao_desenvolvimento86KI3u8R',
    database: 'musculacao_dev',
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
