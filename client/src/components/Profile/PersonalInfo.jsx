import { useContext, useEffect, useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import InputField from "../InputField";
import cargarImg from "../../assets/cargarImagen.jpg";
import { uploadImg } from "../../utils/handleImgs";
import axios from "axios";
import { URL } from "../../configs/constants";
import Context from "../../context/Context";
import { jwtDecode } from "jwt-decode";

const PersonalInfo = ({ user }) => {
  const { authTokens, setAuthTokens } = useContext(Context);

  let { rol } = {};

  if (authTokens) {
    ({ rol } = jwtDecode(authTokens));
  }

  const { register, errors, handleSubmit } = useCustomForm({
    urlApi: "/users",
  });

  const [profile, setProfile] = useState([]);

  const getUser = async (id) => {
    try {
      const response = await axios.get(URL + `/usuarios/info/${id}`);
      if (response.statusText === "OK") {
        setProfile(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = handleSubmit(async (data) => {
    try {
      data.imagen = profile.imagen;
      const response = await axios.put(URL + `/usuarios/edit/${user}`, data);
      setAuthTokens(response.data.token);
      localStorage.setItem("authTokens", JSON.stringify(response.data.token));
      if (response.statusText === "Created") {
        const data = await response.data;
        console.log("Usuario editado con exito:", data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleImgProfile = async (e) => {
    const imagen = await uploadImg(e);
    setProfile({ ...profile, imagen });
  };

  useEffect(() => {
    getUser(user);
  }, [user]);

  return (
    <form
      className="flex flex-col lg:grid grid-rows-1 md:grid-cols-2 gap-5"
      onSubmit={editUser}
    >
      <h3 className="lg:col-span-2">Foto de perfil</h3>
      <div className="flex flex-col lg:flex-row items-center gap-5 mb-6">
        {profile.imagen ? (
          <img
            src={profile.imagen}
            className="size-20 border border-secondary rounded-full "
          />
        ) : (
          <img
            src={cargarImg}
            className="size-20 border border-secondary rounded-full "
          />
        )}
        <input
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          type="file"
          onChange={handleImgProfile}
        />
      </div>
      <h3 className="lg:col-span-2">Información básica</h3>
      <InputField
        text="Nombre"
        type="text"
        name="nombre"
        register={register}
        errors={errors}
        value={profile.nombre}
      />
      <InputField
        text="Apellido"
        type="text"
        name="apellido"
        register={register}
        errors={errors}
        value={profile.apellido}
      />
      <InputField
        text="Identificacion (DNI, pasaporte, etc)"
        type="text"
        name="dni"
        value={profile.dni}
        register={register}
        errors={errors}
      />
      <InputField
        text="Telefono"
        type="tel"
        name="telefono"
        value={profile.telefono}
        register={register}
        errors={errors}
      />
      {rol === "user" && (
        <>
          <h1 className="col-span-2">Informacion de la residencia</h1>
          <InputField
            text="Numero de apartamento"
            type="text"
            name="id_apartamento"
            value={profile.id_apartamento}
            register={register}
            errors={errors}
            is_disabled
          />
        </>
      )}
      <div className="flex justify-end gap-5 mt-6 lg:col-span-2">
        <button className="btn btn-outline btn-secondary">Cancelar</button>
        <button type="submit" className="btn btn-secondary">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
