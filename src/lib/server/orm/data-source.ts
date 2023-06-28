// This file configures the datasource for TypeORM.

// "reflect-metadata" must be the first import
import "reflect-metadata";

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "jaguar",
    password: "jaguar",
    database: "jaguar",
    entities: [],
    synchronize: true,
    logging: true
});
