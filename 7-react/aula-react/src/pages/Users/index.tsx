import ContentHeader from "../../components/ContentHeader";
import Table from "../../components/Table";

const Users = () => {
  return (
    <div>
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
          <tr>
            <td>João</td>
            <td>joao@gmail.com</td>
            <td>(11) 99999-9999</td>
          </tr>
          <tr>
            <td>Maria</td>
            <td>maria@gmail.com</td>
            <td>(11) 99999-9999</td>
          </tr>
          <tr>
            <td>Pedro</td>
            <td>pedro@gmail.com</td>
            <td>(11) 99999-9999</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
