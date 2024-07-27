import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Table from "../../components/Table";
import { api } from "../../utils/api";

type User = {
  id?: string;
  name: string;
  email: string;
  phone: string;
};

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get(`/usuarios`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className={""}>
      <ContentHeader title="Usuários" />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
