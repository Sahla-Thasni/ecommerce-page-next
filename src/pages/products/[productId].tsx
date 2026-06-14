import AddToCartButton from "@/components/cart-button/AddToCartButton";
import Head from "next/head";
import { ProductService } from "@/services/product-service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProductDetails() {

const router = useRouter();
const { productId } = router.query;

const [product, setProduct] = useState<any>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!router.isReady) return;

  const loadProduct = async () => {
    try {
      const data = await ProductService.getProductById(
        Number(productId)
      );
      setProduct(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  loadProduct();
}, [router.isReady, productId]);

if (loading) {
  return <p>Loading Product...</p>;
}
return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
         
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 text-center">
            
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="mb-3">{product.title}</h2>

            <h3 className="text-success mb-3">${product.price}</h3>

            <p className="text-muted mb-4">{product.description}</p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
);
}