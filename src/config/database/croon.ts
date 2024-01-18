import mongoose from "mongoose";

async function cronn() {
  try {
    await mongoose.connect(
      "mongodb+srv://SejaBest:n6NCQalgOvZTIuuY@bestpro-development.otw64m5.mongodb.net/testMirantes",
      );
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

export { cronn };
