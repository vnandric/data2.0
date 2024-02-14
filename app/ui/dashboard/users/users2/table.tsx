import Style from "../table.module.css";
import { getUsers2 } from '@/prisma/data';

export default async function UsersTable() {

    const users = await getUsers2();

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
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}