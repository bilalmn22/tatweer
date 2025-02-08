import Table from "../ui/deliveries/table";
import TablePagination from "../ui/deliveries/pagination";
import Search from "../ui/Search";
import { poppins } from "../ui/fonts";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className={poppins.className}>
      <div className=" min-h-[50px]  flex flex-wrap gap-4 justify-between items-center ">
        <Suspense>
        <Search placeholder={"Search deliveries here ..."} />

        </Suspense>
      </div>
      <Table />
      <Suspense>
      <TablePagination />

      </Suspense>
    </main>
  );
}
