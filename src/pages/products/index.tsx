import ProductList from "@/components/product-list/ProductList";
import { ProductService } from "@/services/product-service";

export default function Product({ products }: any) {
  return <ProductList products={products} />;
}

export async function getServerSideProps() {
  const products = await ProductService.getproducts();

  return {
    props: {
      products,
    },
  };
}
