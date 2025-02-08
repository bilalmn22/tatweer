"use client";
import "./latest-deliveries.css";
import { Suspense, useState } from "react";
import DeliveryBox from "./delivery-box";
function LatestDeliveries() {
  const [selected, setSelected] = useState(0);
  return (
    <div
      id="tracking-latest-deliveries"
      className="overflow-y-scroll grow pr-4 mt-3"
    >
      {[...Array(8)].map((_, index) => (
        <Suspense key={index}>
          <DeliveryBox
          index={index}
            selected={selected}
            setSelected={setSelected}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default LatestDeliveries;
