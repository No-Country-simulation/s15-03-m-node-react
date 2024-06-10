import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

  const [user, setUser] = useState(
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password) => {
    try {
      let url = "https://api-test.brangerbriz.com/api/usuarios/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data.token);
        //setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data.token));
        navigate("/");
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
        "http://localhost:3050/api/usuarios/list",
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

  const getApartments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3050/api/apartamento/list",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.statusText === "OK") {
        setApartments(response.data);
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
        `http://localhost:3050/api/usuarios/approve/${id}`,
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
        `http://localhost:3050/api/usuarios/disapprove/${id}`,
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
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
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

        user,
        setUser,
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
