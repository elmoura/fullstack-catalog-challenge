import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { IProduct } from "@core/products/entities/Product";
import { ProductList } from "./ProductList";
import { MemoryRouter } from "react-router-dom";

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
  it("renders with passed data", () => {
    render(
      <MemoryRouter>
        <ProductList products={mockProductList} />
      </MemoryRouter>
    );

    const nameElement = screen.getByText(mockProductList[0].name);
    const codeElement = screen.getByText(mockProductList[0]._id);
    const priceElement = screen.getByText(mockProductList[0]._id);
    const descriptionElement = screen.getByText(mockProductList[0]._id);

    expect(nameElement).toBeInTheDocument();
    expect(codeElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("renders empty state when the product array is empty", () => {
    render(
      <MemoryRouter>
        <ProductList products={[]} />
      </MemoryRouter>
    );

    const nameElement = screen.queryByText(mockProductList[0].name);
    const codeElement = screen.queryByText(mockProductList[0]._id);
    const priceElement = screen.queryByText(mockProductList[0]._id);
    const descriptionElement = screen.queryByText(mockProductList[0]._id);

    expect(nameElement).not.toBeInTheDocument();
    expect(codeElement).not.toBeInTheDocument();
    expect(priceElement).not.toBeInTheDocument();
    expect(descriptionElement).not.toBeInTheDocument();

    const emptyStateElement = screen.getByTestId("empty-state");

    expect(emptyStateElement).toBeVisible();
  });
});
