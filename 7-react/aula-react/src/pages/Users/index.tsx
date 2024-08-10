import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Table from "../../components/Table";
import FormUser from "../../components/FormUser";
import { api } from "../../utils/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [ultimoUsuario, setUltimoUsuario] = useState("");

  useEffect(() => {
    console.log("carregando os usuários");
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    const responseAxios = await api.get("usuarios");
    const usuariosApi = responseAxios.data;

    setUsers(usuariosApi);
    setUltimoUsuario(usuariosApi[usuariosApi.length - 1].name);
  };

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
          <p>Quantidade de usuários: {users.length}</p>
          <p>Último usuário registrado: {ultimoUsuario}</p>
        </div>
      </div>
      <FormUser carregarUsuarios={carregarUsuarios} />
    </div>
  );
};

export default Users;
