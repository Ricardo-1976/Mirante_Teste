import { Schema, model } from "mongoose";
import { IDocumentProductModel } from "../interface/IModelProduct";

const productSchema = new Schema<IDocumentProductModel>({
    name: String,
    description: String,
    price: Number,
    type: String,
    barcode: Number,
    deletedAt: Date,
    updatedAt: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

export const ProductModel = model<IDocumentProductModel>("Products", productSchema);
