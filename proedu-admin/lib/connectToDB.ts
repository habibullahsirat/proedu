import mongoose from "mongoose";

export const connectToDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI as string;
  if (!MONGODB_URI) {
    throw new Error("DB_URI environment variable is not defined");
  }
  await mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected");
      console.log("Database:", mongoose.connection.name);
      console.log("Host:", mongoose.connection.host);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
};
