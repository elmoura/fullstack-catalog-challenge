export interface Sku {
  _id: string;

  productId: string;

  identifier: string;

  ean?: string;

  description: string;

  price: number;

  createdAt: Date;

  updatedAt: Date;
}
