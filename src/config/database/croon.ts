import mongoose from "mongoose";

async function cronn() {
  try {
    await mongoose.connect(String(process.env.DATABASE_URL));
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export { cronn };
