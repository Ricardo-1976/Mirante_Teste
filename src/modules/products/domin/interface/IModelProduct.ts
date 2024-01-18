import { Document } from "mongoose"

export interface IDocumentProductModel extends Document {
    name: string,
    description?: string | null | undefined,
    price: number
    type: string,
    barcode: number,
    createdAt: Date,
    updatedAt?: Date | null,
    deletedAt?: Date | null | undefined,
}