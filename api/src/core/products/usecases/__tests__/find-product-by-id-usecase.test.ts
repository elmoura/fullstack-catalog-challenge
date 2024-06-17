import { Container } from "inversify";
import { ProductMongoDatasource } from "@application/products/datasources/product.mongo-datasource";
import {
  IProductDataSource,
  ProductDataSource,
} from "@core/products/data/product.datasource";
import { FindProductByIdUseCase } from "../find-product-by-id.usecase";
import { ObjectId } from "mongodb";
import { FindProductByIdInput } from "../dto/find-product-by-id.input";
import { ProductNotFoundException } from "@core/products/errors/product-not-found.exception";
import { InvalidClientDataException } from "@common/exceptions/invalid-client-data.exception";
import { ExceptionReasons } from "@common/exceptions/exception-reasons.enum";

jest.mock("@application/products/datasources/product.mongo-datasource");

describe(FindProductByIdUseCase.name, () => {
  let findProductByIdUseCase: FindProductByIdUseCase;

  beforeAll(() => {
    const container = new Container();

    container
      .bind<IProductDataSource>(ProductDataSource)
      .to(ProductMongoDatasource);

    container.bind(FindProductByIdUseCase).toSelf();

    findProductByIdUseCase = container.get(FindProductByIdUseCase);
  });

  const mockInput: FindProductByIdInput = {
    productId: new ObjectId().toString(),
  };

  it("should return a product", async () => {
    const result = await findProductByIdUseCase.execute(mockInput);

    expect(result._id).toBeTruthy();
    expect(result.name).toBeTruthy();
    expect(result.description).toBeTruthy();
    expect(result.price).toBeTruthy();
    expect(result.imageUrl).toBeTruthy();
  });

  it("should throw a ProductNotFoundException when product dont exist", async () => {
    try {
      jest
        .spyOn(findProductByIdUseCase.productDataSource, "findOne")
        .mockImplementationOnce(async () => null);

      const result = await findProductByIdUseCase.execute(mockInput);
    } catch (error) {
      expect(error).toBeInstanceOf(ProductNotFoundException);
    }
  });

  it("should throw an error when an invalid productId is passed", async () => {
    try {
      await findProductByIdUseCase.execute({
        productId: "not an objectId",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidClientDataException);
      expect(error.reason).toBe(ExceptionReasons.INVALID_CLIENT_DATA);
    }
  });
});
