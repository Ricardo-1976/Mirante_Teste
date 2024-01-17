import { ProductsEntity, ProductsEntity as RawProductsEntity } from "~/modules/products/application/entities/productEntity";
import { IDocumentProductModel } from "../../http/interface/IModelProduct";

export class MongoNotificationMapper {

  static toMongo(product: RawProductsEntity) {
    return {
      _id: product.id,
      name: product.name,
      description: product?.description,
      price: product?.price,
      type: product?.type,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      deletedAt: product.deletedAt
    };
  }

  static toDomain(raw: ProductsEntity): ProductsEntity {
    return new ProductsEntity({
      name : raw.name, 
      description: raw?.description, 
      price: raw.price, 
      type : raw.type, 
    });
  }
}
