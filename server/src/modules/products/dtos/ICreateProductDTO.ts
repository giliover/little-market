export default interface ICreateProductDTO {
  name: string;
  code: string;
  unity: string;
  category: number;
  description: string;
  carousel?: string[];
  price: string;
  discount: string;
}
