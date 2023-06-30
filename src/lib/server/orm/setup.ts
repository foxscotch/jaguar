import { AppDataSource } from "./data-source";

export async function initDataSource() {
  try {
    await AppDataSource.initialize();
    console.log("Connected to database");
  } catch (err) {
    throw new Error("Error occurred while connecting to database", {
      cause: err,
    });
  }
}
