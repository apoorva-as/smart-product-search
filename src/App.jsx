import { useState } from "react";
import { mockProducts } from "./data/mockData";
import { getBestVendor } from "./utils/scoring";
import ProductCard from "./components/ProductCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [showVendors, setShowVendors] = useState(false);

  // ✅ improved search + default product
  const product = mockProducts.find((p) => {
    if (search.trim() === "") return p.product === "Dove Shampoo"; // default

    const productName = p.product.toLowerCase();
    const searchWords = search.toLowerCase().trim().split(" ");

    return searchWords.every((word) =>
      productName.includes(word)
    );
  });

  // best vendor
  const bestVendor = product ? getBestVendor(product.vendors) : null;

  // add score to all vendors
  const scoredVendors = product
    ? product.vendors.map((v) => {
        const score =
          (v.price * 0.5) +
          (v.distance * 0.3) -
          (v.rating * 0.2);

        return {
          ...v,
          score: Number(score.toFixed(2)),
        };
      })
    : [];

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        maxWidth: 600,
        margin: "0 auto",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1>Smart Product Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          width: 250,
          marginBottom: 20,
          borderRadius: 20,
          border: "1px solid #ccc",
        }}
      />

      {/* Product Display */}
      {product && bestVendor ? (
        <ProductCard
          product={product}
          bestVendor={bestVendor}
          vendors={scoredVendors}
          showVendors={showVendors}
          onToggleVendors={() => setShowVendors(!showVendors)}
        />
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
}