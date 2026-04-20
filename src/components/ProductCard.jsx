import VendorList from './VendorList';

export default function ProductCard({
  product,
  bestVendor,
  vendors,
  showVendors,
  onToggleVendors,
}) {
  return (
    <article className="product-card">
      <div className="product-card__badge">1 optimized result</div>

      <div className="product-card__header">
        <div>
          <h2>{product.product}</h2>
          <p>{product.description}</p>
        </div>

        <div className="best-vendor-pill">{bestVendor.name}</div>
      </div>

      <div className="product-card__stats">
        <div className="stat-box">
          <span className="stat-box__label">Best Price</span>
          <strong>Rs. {bestVendor.price}</strong>
        </div>

        <div className="stat-box">
          <span className="stat-box__label">Rating</span>
          <strong>{bestVendor.rating} / 5</strong>
        </div>

        <div className="stat-box">
          <span className="stat-box__label">Delivery Distance</span>
          <strong>{bestVendor.distance} km</strong>
        </div>

        <div className="stat-box">
          <span className="stat-box__label">Smart Score</span>
          <strong>{bestVendor.score}</strong>
        </div>
      </div>

      <div className="product-card__actions">
        <button
          type="button"
          className="button button--primary"
          onClick={onToggleVendors}
        >
          {showVendors ? 'Hide Other Sellers' : 'View Other Sellers'}
        </button>
      </div>

      {showVendors && (
        <div className="product-card__vendors">
          <VendorList
            vendors={vendors}
            selectedVendorId={bestVendor.id}
          />
        </div>
      )}
    </article>
  );
}