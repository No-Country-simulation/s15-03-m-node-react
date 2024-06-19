import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { URL } from "../configs/constants";

export const Context = createContext();

export default Context;

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [apartments, setApartments] = useState([]);

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const loginUser = async (email, password) => {
    try {
      let url = "https://api-test.brangerbriz.com/api/usuarios/login";
      const response = await axios.post(url, { email, password });

      const { data } = response;
      if (response.status === 200) {
        setAuthTokens(data.token);
        localStorage.setItem("authTokens", JSON.stringify(data.token));
        navigate("/welcome");
        console.log("Login Success");
      } else {
        console.log(response.status);
        console.log("An Error Occured");
        console.log("Email - Password does not exist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://api-test.brangerbriz.com/api/usuarios/list"
      );
      if (response.statusText === "OK") {
        if (users.length === 0) {
          setUsers(response.data);
        }
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const getApartments = async () => {
    try {
      const response = await axios.get(
        "https://api-test.brangerbriz.com/api/apartamento/list"
      );
      if (response.statusText === "OK") {
        if (apartments.length === 0) {
          setApartments(response.data);
        }
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const acceptUser = async (id) => {
    try {
      const response = await axios.put(
        `https://api-test.brangerbriz.com/api/usuarios/approve/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.statusText === "OK") {
        setUsers(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const rejectedUser = async (id) => {
    try {
      const response = await axios.put(
        `https://api-test.brangerbriz.com/api/usuarios/disapprove/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.statusText === "OK") {
        setUsers(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    localStorage.clear();
    navigate("/");
  };

  return (
    <Context.Provider
      value={{
        apartments,
        setApartments,
        setUsers,
        users,
        getUsers,
        getApartments,
        acceptUser,
        rejectedUser,
        authTokens,
        setAuthTokens,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
