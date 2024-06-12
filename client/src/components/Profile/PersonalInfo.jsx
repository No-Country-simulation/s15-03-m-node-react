import { useEffect, useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import InputField from "../InputField";
import cargarImg from "../../assets/cargarImagen.jpg";
import { uploadImg } from "../../utils/handleImgs";
import axios from "axios";
import { URL } from "../../configs/constants";

const PersonalInfo = ({ user }) => {
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
      const response = await axios.put(URL + `/usuarios/edit/${user}`, data);

      if (response.statusText === "OK") {
        const data = await response.json();
        console.log("Usuario editado con exito:", data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleImgProfile = async (e) => {
    const img = await uploadImg(e);
    setProfile({ ...profile, img });
  };

  useEffect(() => {
    getUser(user);
  }, [user]);

  return (
    <>
      <div>
        <h3>Foto de perfil</h3>
        <div className="flex items-center gap-5 mb-6">
          {profile.img ? (
            <img
              src={profile.img}
              className="w-20 h-20 border border-secondary rounded-full "
            />
          ) : (
            <img
              src={cargarImg}
              className="w-20 h-20 border border-secondary rounded-full "
            />
          )}
          <input
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            type="file"
            onChange={handleImgProfile}
          />
        </div>
      </div>
      <div>
        <h3>Información básica</h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          onSubmit={editUser}
        >
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
            is_disabled
          />
          <h1 className="col-span-2">Informacion de la residencia</h1>
          <InputField
            text="Numero de apartamento"
            type="text"
            name="apartmentNumber"
            value={profile.numApartament}
            register={register}
            errors={errors}
            is_disabled
          />
          <InputField
            text="Piso"
            type="text"
            name="floor"
            value={profile.floor}
            register={register}
            errors={errors}
            is_disabled
          />
          <div className="flex justify-end gap-5 mt-6 col-span-2">
            <button className="btn btn-outline btn-secondary">Cancelar</button>
            <button type="submit" className="btn btn-secondary">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
