import Search from "../ui/Search";
import LatestDeliveries from "../ui/tracking/latest-deliveries";
import TrackingMap from "../ui/tracking/map";
import DeliveryInfo from "../ui/tracking/delivery-info";
import { poppins } from "../ui/fonts";
import { Suspense } from "react";

export default async function Tracking() {
  return (
    <div className={`w-full flex max-h-[980px]  gap-6 ${poppins.className}`}>
      <div className="min-w-[300px] flex flex-col   ">
        <Suspense>
          <Search placeholder={"Search Deliveries by ID ..."} />
        </Suspense>
        <LatestDeliveries />
      </div>
      <div className=" grow  flex flex-col  ">
        <div className="w-full grow h-[600px]">
          <TrackingMap />
        </div>
        <DeliveryInfo />
      </div>
    </div>
  );
}
