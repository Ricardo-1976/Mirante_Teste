import { Document } from "mongoose"

export interface IDocumentProductModel extends Document {
    name: string,
    description?: string,
    price: number
    type: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}