import { Button, Modal } from "react-bootstrap";
import { ButtonSuccess } from "../Buttons";
import { useState } from "react";
import { useUser } from "../../hooks/userProvider";

const FormUser = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { salvarUsuario } = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const fecharModal = () => {
    setShow(false);
  };

  const onClick = async () => {
    setLoading(true);
    const dadosParaApi: User = {
      name: name,
      email: email,
      phone: phone,
    };

    await salvarUsuario(dadosParaApi);
    setShow(false);
    setLoading(false);
  };

  return (
    <div className="row">
      <div className="col-12">
        <ButtonSuccess onClick={() => setShow(true)}>
          Adicionar Usuário
        </ButtonSuccess>
      </div>

      <Modal
        show={show}
        onHide={fecharModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                aria-describedby="nomeHelp"
                onChange={(e) => setName(e.target.value)}
              />
              <div id="nomeHelp" className="form-text">
                Insira o nome do usuário.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                Informe o email do usuário.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                aria-describedby="phoneHelp"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div id="phoneHelp" className="form-text">
                Informe o telefone do usuário.
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={fecharModal}>
            Cancelar
          </Button>
          <ButtonSuccess disabled={loading} onClick={onClick}>
            Salvar
          </ButtonSuccess>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FormUser;
