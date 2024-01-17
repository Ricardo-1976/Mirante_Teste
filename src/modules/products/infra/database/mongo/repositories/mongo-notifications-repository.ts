import { ProductsEntity } from "~/modules/products/application/entities/productEntity"
import { IProductsRepository } from "~/modules/products/application/repositories/productsRepository"
import { ProductModel } from "../../http/view-models/notification-view-model"
import { MongoNotificationMapper } from "../mappers/mongoProductMapper"

class ProductMongoRepository implements IProductsRepository {
  async insert(product: ProductsEntity): Promise<void> {
    await ProductModel.create(MongoNotificationMapper.toMongo(product))
  }
  async findAll(): Promise<ProductsEntity[]> {
    const products = await ProductModel.find({
      deletedAt: null
    })
  
    const productsEntities = products.map((product) => {
        return MongoNotificationMapper.toDomain({product}) 
    })
    return productsEntities;
  }
}

export { ProductMongoRepository }

