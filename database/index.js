const loki = require('lokijs');
const db = new loki('bot.db', { autoload: true });

module.exports = db;
