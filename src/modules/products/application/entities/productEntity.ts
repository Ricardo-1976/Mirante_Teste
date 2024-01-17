import { randomUUID } from 'node:crypto'
import { Replace } from '~/modules/helpers/Replace';

export interface ProductProps {
  name: string,
  description?: string,
  price: number
  type: string,
  createdAt: Date,
  updatedAt?: Date | null,
  deletedAt?: Date | null,
}

export class ProductsEntity {
  private _id: string;
  private props: ProductProps;

  constructor(
    props: Replace<ProductProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

    public get id() {
      return this._id
    }
  
    public set name(name: string) {
      this.props.name = name;
    }

    public get name(): string {
      return this.props.name
    }

    public set description(description: string) {
      this.props.description = description;
    }

    public get description(): string | null | undefined{
      return this.props.description;
    }

    public set price(price: number) {
      this.props.price = price;
    }

    public get price(): number {
      return this.props.price;
    }

    public set type(type: string) {
      this.props.type = type;
    }

    public get type(): string {
      return this.props.type
    }

    public get createdAt(): Date {
      return this.props.createdAt
    }
  
    public set updatedAt(updatedAt:  Date | null | undefined) {
      this.props.updatedAt = updatedAt;
    }

    public get updatedAt(): Date | null | undefined {
      return this.props.updatedAt;
    }

    public get deletedAt(): Date | null | undefined {
      return this.props.deletedAt;
    }
  
    public set deletedAt(deletedAt: Date | null | undefined) {
      this.props.deletedAt = deletedAt;
    }
 }
