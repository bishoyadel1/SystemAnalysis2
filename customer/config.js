const { Sequelize } = require("sequelize");
const { Kafka } = require("kafkajs");
const mysql2 = require("mysql2");
// const { now } = require("sequelize/types/utils");

// ================================================== kafka config ====================================

// const kafka = new Kafka({
//   clientId: "myApp",
//   brokers: [process.env.KAFKA_HOST],
// });

// const consumer = kafka.consumer({ groupId: "group-test" });

// ================================================== db config ====================================

const sequelize = new Sequelize("my_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
});

// const sequelize = new Sequelize("my_db", "root", "", {
//   host: process.env.DB_HOST,
//   dialect: "mysql",
//   dialectModule: mysql2,
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
sequelize.sync();

module.exports = { sequelize };