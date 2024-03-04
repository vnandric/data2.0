import Users1Table from "@/app/ui/dashboard/users/users1/table";
import { Suspense } from "react";
import CreateUser from "@/app/ui/dashboard/users/create/create";
import { getUsers1 } from "@/app/api/data";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export function Table({ users }) {
  return (
    <div>
      <Users1Table users={users} />
    </div>
  );
}

export default async function Users1({ params }) {
  const { id } = params;

  if (is === "1") {
    const users = await getUsers1();
    return <Users1 users={users} />;
  }

  return (
    <>
      <CreateUser />
      <Suspense>
        <Table users={users} />
      </Suspense>
    </>
  );
}
