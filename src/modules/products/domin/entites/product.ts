import { Schema, model } from "mongoose";
import { IDocumentProductModel } from "../interface/IModelProduct";

export const ProductModel = model<IDocumentProductModel>(
  "Products",
  new Schema({
    name: String,
    description: String,
    price: Number,
    type: String,
    deletedAt: Date,
    updatedAt: Date,
    createdAt: Date,
  }),
);
