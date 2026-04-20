export default function VendorList({ vendors, selectedVendorId }) {
  return (


    <div>
      {vendors.map((v, i) => {
        const isBest = v.id === selectedVendorId;

        return (
          <div key={v.id} style={{ borderTop: "1px solid #ccc", padding: "8px 0" }}>
            
            <p>
              {v.name} {isBest && "(Best)"}
            </p>

            <p>
              ₹{v.price} | ⭐ {v.rating} | {v.distance} km
            </p>

            <p>
              Score: {v.score}
            </p>

          </div>
        );
      })}
    </div>
  );

}