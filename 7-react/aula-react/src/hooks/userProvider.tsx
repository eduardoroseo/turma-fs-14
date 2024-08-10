import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/api";

type UserProviderProps = {
  children: React.ReactNode;
};

type UserContextTypes = {
  qtdUsers: number;
  users: User[];
  ultimoUsuario: string;
  carregarUsuarios: () => Promise<void>;
  salvarUsuario: (payload: User) => Promise<void>;
};

const UserContext = createContext({} as UserContextTypes);

const UserProvider = ({ children }: UserProviderProps) => {
  const [qtdUsers, setQtdUsers] = useState(0);
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
    setQtdUsers(usuariosApi.length);
  };

  const salvarUsuario = async (payload: User) => {
    // mock api time 400ms
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await api.post("usuarios", payload);

    carregarUsuarios();
  };

  const value: UserContextTypes = {
    qtdUsers,
    users,
    ultimoUsuario,
    carregarUsuarios,
    salvarUsuario,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUsuario must be used within a UserProvider");
  }

  return context;
};

export { useUser, UserProvider };
