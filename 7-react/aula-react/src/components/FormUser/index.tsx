import { Button, Modal } from "react-bootstrap";
import * as yup from "yup";
import { ButtonSuccess } from "../Buttons";
import { useState } from "react";
import { useUser } from "../../hooks/userProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório").max(100),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O campo email, precisa ser válido"),
  phone: yup.string().required("O telefone é obrigatório"),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const FormUser = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { salvarUsuario } = useUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const fecharModal = () => {
    setShow(false);
  };

  const onClick = async (formData: FormData) => {
    console.log(formData);
    setLoading(true);

    await salvarUsuario(formData);
    setShow(false);
    setLoading(false);
    reset();
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
        <form onSubmit={handleSubmit(onClick)}>
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
                  {...register("name")}
                  type="text"
                  className={
                    errors?.name?.message
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="nome"
                  aria-describedby="nomeHelp"
                />
                {errors?.name?.message ? (
                  <div className="invalid-feedback">{errors.name.message}</div>
                ) : (
                  <div id="nomeHelp" className="form-text">
                    Insira o nome do usuário.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={
                    errors?.email?.message
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="email"
                  aria-describedby="emailHelp"
                />
                {errors?.email?.message ? (
                  <div className="invalid-feedback">{errors.email.message}</div>
                ) : (
                  <div id="emailHelp" className="form-text">
                    Informe o email do usuário.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Telefone
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  className={
                    errors?.phone?.message
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="phone"
                  aria-describedby="phoneHelp"
                />
                {errors?.phone?.message ? (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                ) : (
                  <div id="phoneHelp" className="form-text">
                    Informe o telefone do usuário.
                  </div>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={fecharModal}>
              Cancelar
            </Button>
            <ButtonSuccess type="submit" disabled={loading}>
              Salvar
            </ButtonSuccess>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default FormUser;
