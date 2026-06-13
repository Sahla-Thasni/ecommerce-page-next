import ProductCard from "../product-card/ProductCard";

export default function ProductList({ products }: any) {
  return (
    <div className="container">
      <div className="row">
        {products.map((p: any) => (
          <div key={p.id} className="col-md-4 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
