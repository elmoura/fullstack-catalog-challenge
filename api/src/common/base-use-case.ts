export interface IBaseUseCase<Input = any, Output = any> {
  execute(data: Input): Promise<Output>;
}
