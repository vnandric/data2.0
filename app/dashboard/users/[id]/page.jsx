import UsersTable from "@/app/ui/dashboard/users/table";
import { Suspense } from "react";
import CreateUser from "@/app/ui/dashboard/users/create/create";
import { getUsers1, getUsers2, getUsers3 } from "@/app/api/data";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export async function Table({ id }) {
  if (id === "1") {
    const users = await getUsers1();
    return <UsersTable users={users} />;
  } else if (id === "2") {
    const users = await getUsers2();
    return <UsersTable users={users} />;
  } else if (id === "3") {
    const users = await getUsers3();
    return <UsersTable users={users} />;
  }
}

export default async function Users1({ params }) {
  const { id } = params;

  return (
    <>
      <CreateUser />
      <Suspense>
        <Table id={id} />
      </Suspense>
    </>
  );
}
