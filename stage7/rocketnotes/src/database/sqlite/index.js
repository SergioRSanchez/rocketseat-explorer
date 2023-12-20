const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

async function sqLiteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database,
  })
};

module.exports = sqLiteConnection;