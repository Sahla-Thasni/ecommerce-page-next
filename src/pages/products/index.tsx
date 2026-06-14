import ProductList from "@/components/product-list/ProductList";
import { ProductService } from "@/services/product-service";
import { useEffect, useState } from "react";

// export default function Product({ products }: any) {

// }

// export async function getServerSideProps() {
//   const products = await ProductService.getproducts();

//   return {
//     props: {
//       products,
//     },
//   };
// }
// export async function getServerSideProps() {
//   try {
//     const products = await ProductService.getproducts();

//     return {
//       props: {
//         products,
//       },
//     };
//   } catch (error) {
//     console.error(error);

//     return {
//       props: {
//         products: [],
//       },
//     };
//   }
// }
// export async function getServerSideProps() {
//   return {
//     props: {
//       products: [
//         {
//           id: 1,
//           title: "Test Product",
//           price: 100,
//           image: "https://via.placeholder.com/150",
//         },
//       ],
//     },
//   };
// }
export default function Product() {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  ProductService.getproducts()
    .then((data) => setProducts(data))
    .catch((err) => console.error(err));
}, []);


   return <ProductList products={products} />;

}