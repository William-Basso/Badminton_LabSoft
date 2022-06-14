const db = require("./db.js")

async function open() {
  await db.connect();
}

async function close() {
  await db.end();
}

async function sCmd(sql) {
  return await db.query(`${sql}`)
}

module.exports = { open, sCmd, close };
