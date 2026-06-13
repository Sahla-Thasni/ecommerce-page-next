import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  
  static getproducts = async () => {
  const url = this.getUrl("/products");
  console.log("URL =", url);

  const response = await fetch(url);

  const text = await response.text();
  console.log(text.substring(0, 100));

  return JSON.parse(text);
};
  static getProductById = async (id: number) => {
    var productResponse = await fetch(this.getUrl(`/products/` + id));
    var product = await productResponse.json();
    return product;
  };
}
