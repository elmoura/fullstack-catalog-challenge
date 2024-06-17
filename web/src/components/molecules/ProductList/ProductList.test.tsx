import "reflect-metadata";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IProduct } from "@core/products/entities/Product";
import { ProductList } from "./ProductList";

const mockProductList: IProduct[] = [
  {
    _id: "mock-id",
    name: "mock product",
    description: "mock description",
    imageUrl: "google.com",
    price: 10.9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe("ProductItem", () => {
  it("renders with passed data", async () => {
    render(<ProductList products={mockProductList} />);

    const nameElement = screen.findByText(mockProductList[0].name);
    const codeElement = screen.findByText(mockProductList[0]._id);
    const priceElement = screen.findByText(mockProductList[0]._id);
    const descriptionElement = screen.findByText(mockProductList[0]._id);

    expect(nameElement).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders empty state when the product array is empty", async () => {
    render(<ProductList products={[]} />);

    const nameElement = screen.findByText(mockProductList[0].name);
    const codeElement = screen.findByText(mockProductList[0]._id);
    const priceElement = screen.findByText(mockProductList[0]._id);
    const descriptionElement = screen.findByText(mockProductList[0]._id);

    expect(nameElement).not.toBeInTheDocument();
    expect(codeElement).not.toBeInTheDocument();
    expect(priceElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();
  });
});
