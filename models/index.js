import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
});

const User = sequelize.define("user", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: DataTypes.STRING,
});

sequelize.sync({ alter: true });

export { User };
