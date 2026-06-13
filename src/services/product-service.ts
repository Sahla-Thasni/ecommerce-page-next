import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  
static getproducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  console.log("Status:", response.status);

  const text = await response.text();
  console.log("Response starts with:", text.substring(0, 100));

  return JSON.parse(text);
};
  static getProductById = async (id: number) => {
    var productResponse = await fetch(this.getUrl(`/products/` + id));
    var product = await productResponse.json();
    return product;
  };
}
