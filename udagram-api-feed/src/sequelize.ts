import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: 5432,
  dialect: config.dialect,
  storage: ":memory:",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
