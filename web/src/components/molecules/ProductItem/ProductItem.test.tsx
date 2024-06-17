import "reflect-metadata";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IProduct } from "@core/products/entities/Product";
import { ProductItem } from "./ProductItem";

const mockProduct: IProduct = {
  _id: "mock-id",
  name: "mock product",
  description: "mock description",
  imageUrl: "google.com",
  price: 10.9,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe("ProductItem", () => {
  it("renders with passed data", async () => {
    render(<ProductItem product={mockProduct} />);

    const nameElement = screen.findByText(mockProduct.name);
    const codeElement = screen.findByText(mockProduct._id);
    const priceElement = screen.findByText(mockProduct._id);
    const descriptionElement = screen.findByText(mockProduct._id);

    expect(nameElement).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
