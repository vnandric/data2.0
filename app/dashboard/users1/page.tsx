import Users1Table from "@/app/ui/dashboard/users/users1/table";
import { Suspense } from "react";
import CreateUser from "@/app/ui/dashboard/users/create/create";

export default function Users1() {
  return (
    <>
      <CreateUser />
      <Suspense>
        <Users1Table />
      </Suspense>
    </>
  );
}
