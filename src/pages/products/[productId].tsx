

// import { ProductService } from "@/services/product-service";

// export default function ProductDetails({ product }: any) {
//   return (
//     <>
//       <Head>
//         <title>{product.title}</title>
//       </Head>

//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md-6 text-center">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="img-fluid"
//               style={{ maxHeight: "300px", objectFit: "contain" }}
//             />
//           </div>

//           <div className="col-md-6">
//             <h2 className="mb-3">{product.title}</h2>

//             <h3 className="text-success mb-3">${product.price}</h3>

//             <p className="text-muted mb-4">{product.description}</p>

//             <AddToCartButton product={product} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export async function getServerSideProps(context: any) {
//   const { productId } = context.params;

//   const product = await ProductService.getProductById(Number(productId));

//   return {
//     props: {
//       product,
//     },
//   };
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductService } from "@/services/product-service";
import Head from "next/head";
import AddToCartButton from "@/components/cart-button/AddToCartButton";

export default function ProductDetails() {
  const router = useRouter();
  const { productId } = router.query;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!productId) return;

    ProductService.getProductById(Number(productId))
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [productId]);

  if (!product) return <p>Loading...</p>;
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