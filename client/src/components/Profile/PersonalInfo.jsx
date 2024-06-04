import { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import InputField from "../InputField";
import cargarImg from "../../assets/cargarImagen.jpg";
import { uploadImg } from "../../utils/handleImgs";

const PersonalInfo = () => {
  const { register, errors } = useCustomForm({ urlApi: "/users" });

  const [profile, setProfile] = useState({
    firstName: "Eva",
    lastName: "Gonzalez",
    dni: "12345678",
    numApartament: "312d",
    floor: "2",
    img: "",
  });

  const handleImgProfile = async (e) => {
    const img = await uploadImg(e);
    setProfile({ ...profile, img });
  };

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
            type="file"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            onChange={handleImgProfile}
          />
        </div>
      </div>
      <div>
        <h3>Información básica</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField
            text="Nombre"
            type="text"
            name="firstName"
            register={register}
            errors={errors}
            value={profile.firstName}
          />
          <InputField
            text="Apellido"
            type="text"
            name="lastName"
            register={register}
            errors={errors}
            value={profile.lastName}
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
