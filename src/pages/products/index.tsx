import ProductList from "@/components/product-list/ProductList";
import { ProductService } from "@/services/product-service";

export default function Product({ products }: any) {
  return <ProductList products={products} />;
}

// export async function getServerSideProps() {
//   const products = await ProductService.getproducts();

//   return {
//     props: {
//       products,
//     },
//   };
// }
export async function getServerSideProps() {
  try {
    const products = await ProductService.getproducts();

    console.log("Products loaded:", products.length);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("getServerSideProps error:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}