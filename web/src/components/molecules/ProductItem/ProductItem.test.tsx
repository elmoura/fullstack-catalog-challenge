import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IProduct } from "@core/products/entities/Product";
import { ProductItem } from "./ProductItem";
import { MemoryRouter } from "react-router-dom";

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
  it("renders with passed data", () => {
    render(
      <MemoryRouter>
        <ProductItem product={mockProduct} />
      </MemoryRouter>
    );

    const nameElement = screen.getByText(mockProduct.name);
    const codeElement = screen.getByText(mockProduct._id);
    const priceElement = screen.getByText(mockProduct._id);
    const descriptionElement = screen.getByText(mockProduct._id);

    expect(nameElement).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
