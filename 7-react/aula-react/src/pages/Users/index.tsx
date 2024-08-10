import ContentHeader from "../../components/ContentHeader";
import Table from "../../components/Table";
import FormUser from "../../components/FormUser";
import { useUser } from "../../hooks/userProvider";

const Users = () => {
  const { qtdUsers, users, ultimoUsuario } = useUser();

  return (
    <div className={""}>
      <ContentHeader title="Usuários" />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="row">
        <div className="col-6">
          <p>Quantidade de usuários: {qtdUsers}</p>
          <p>Último usuário registrado: {ultimoUsuario}</p>
        </div>
      </div>
      <FormUser />
    </div>
  );
};

export default Users;
