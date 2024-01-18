import { Document } from "mongoose"

export interface IDocumentProductModel extends Document {
    name: string,
    description?: string | null | undefined,
    price?: number | null | undefined,
    type: string,
    barcode: number,
    createdAt: Date,
    updatedAt?: Date | null,
    deletedAt?: Date | null | undefined,
}