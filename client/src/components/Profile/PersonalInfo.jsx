import useCustomForm from "../../hooks/useCustomForm";
import InputField from "../InputField";

const PersonalInfo = () => {
  const { register, errors } = useCustomForm({ urlApi: "/users" });

  return (
    <>
      <div>
        <h3>Foto de perfil</h3>
        <div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
        </div>
      </div>
      <div>
        <h3>Información básica</h3>
        <form>
          <InputField
            text="Nombre"
            type="text"
            name="name"
            register={register}
            errors={errors}
          />
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;
