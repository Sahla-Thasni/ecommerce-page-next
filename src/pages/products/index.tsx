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
  const [loading, setLoading] = useState(true);

useEffect(() => {
  ProductService.getproducts()
    .then((data) => setProducts(data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, []);

 if (loading) {
  return (
    <div className="text-center mt-5">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-danger mt-2">Loading Products...</p>
    </div>
  );
}
   return (
   <div className="text-center mt-5">
     
      <ProductList products={products} />;
    </div> 
);

}