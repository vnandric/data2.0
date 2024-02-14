import Style from "../table.module.css";
import { getUsers1 } from "@/prisma/data";

export default async function UsersTable() {
  const users = await getUsers1();

  return (
    <>
      <div className={Style.main}>
        <h1>Users</h1>
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
                <td className="text-white">{user.id}</td>
                <td className="text-white">{user.name}</td>
                <td className="text-white">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
