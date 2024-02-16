import Style from "../table.module.css";
import { getUsers1 } from "@/app/api/data";
import CreateUser from "../create/create";
import DeleteUser from "../delete/delete";

export default async function UsersTable() {
  const users = await getUsers1();

  return (
    <>
      <div className={Style.main}>
        <h1 className="text-white">Users</h1>
        <CreateUser />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <DeleteUser userId={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
