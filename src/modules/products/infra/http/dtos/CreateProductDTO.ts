interface ICreateProductDTO {
  name: string;
  description: string;
  price: number;
  type: string;
  barcode: number;
}

interface IListProductDTO {
  id: string;
  name: string;
  description: string;
  price: number;
  type: string;
  barcode: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IUpdateProductDTO {
  _id?: string;
  name: string;
  description?: string | null | undefined;
  price: number;
  type: string;
  barcode: number;
  updatedAt?: Date | null | undefined;
}

export { ICreateProductDTO , IListProductDTO, IUpdateProductDTO };
