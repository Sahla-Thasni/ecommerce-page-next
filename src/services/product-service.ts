import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase {
  
static getproducts = async () => {
  const response = await fetch(this.getUrl("/products"));

  return await response.json();
};
static getProductById = async (id: number) => {
  const response = await fetch(this.getUrl(`/products/${id}`));

  return await response.json();
};
}
// import { ServiceBase } from "./service-base";

// export class ProductService extends ServiceBase {
//   static async getproducts() {
//     return this.get("/products");
//   }

//   static async getProductById(id: number) {
//     return this.get(`/products/${id}`);
//   }
// }
