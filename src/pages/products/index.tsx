// import ProductList from "@/components/product-list/ProductList";
// import { ProductService } from "@/services/product-service";

// export default function Product({ products }: any) {
//   return <ProductList products={products} />;
// }

// export async function getServerSideProps() {
//   const products = await ProductService.getproducts();

//   return {
//     props: {
//       products,
//     },
//   };
// }
import ProductList from "@/components/product-list/ProductList";

export default function Product() {
  const products = [
    {
      id: 1,
      title: "Test Product",
      price: 100,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
  ];

  return <ProductList products={products} />;
}