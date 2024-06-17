export interface ISku {
  _id: string;

  productId: string;

  identifier: string;

  ean?: string;

  price?: number;

  description: string;

  createdAt: Date;

  updatedAt: Date;
}
