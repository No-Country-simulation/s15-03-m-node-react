import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userCreated, setUserCreated] = useState({
    name: "Edivaldo",
    surname: "Gomes",
    dni: "MMMMM",
    email: "Estoy@gmail.com",
    cellphone: "151551515",
    consent: true,
    password: "121212",
  });

  return (
    <Context.Provider
      value={{
        userCreated,
        setUserCreated,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
