import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Context from "../../context/Context";

const ButtonModalNews = ({ getNewsList }) => {
  const { authTokens } = useContext(Context);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const URL = "https://api-test.brangerbriz.com/api";

  const getActualDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${year}-${month}-${day} ${hour}:${minutes}`;
  };

  const createNews = async (data) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(URL + "/anuncio/create", data);

      if (response.status === 200) {
        console.log("se envio bien!!");
      }
      getNewsList();
      reset();
      document.getElementById("my_modal_2").close();
    } catch (error) {
      setError(
        "No se puede publicar el anuncio. Por favor inténtalo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    createNews(data);
  };

  let { id } = {};

  if (authTokens) {
    ({ id } = jwtDecode(authTokens));
  }

  return (
    <>
      <button
        className="py-1 px-4 rounded-md bg-primary text-sm text-[#fff]"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Publicar anuncio
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className={`modal-box bg-base-200`}>
          <h3 className="font-libre font-bold py-3 text-xl xl:text-3xl">
            Publicar <span className={`text-primary`}>anuncio</span>
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <p
              onClick={() => {
                document.getElementById("my_modal_2").close();
                reset();
                setError("");
              }}
              className="btn btn-sm text-primary btn-ghost absolute right-2 top-2"
            >
              ✕
            </p>
            <div className=" space-y-4">
              <div>
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text flex items-center justify-evenly gap-1">
                      Mensaje:
                    </span>
                  </div>
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    {...register("mensaje", { required: true })}
                    autoComplete="off"
                    className="textarea bg-base-100 border-primary textarea-md w-full resize-none"
                    rows={4}
                  ></textarea>
                </label>
                {error && <p className="text-red-500 py-2 text-sm">{error}</p>}
              </div>
              <input
                type="text"
                className="hidden"
                name="titulo"
                defaultValue={"Titulo del anuncio"}
                {...register("titulo", { required: true })}
              />
              <input
                type="text"
                className="hidden"
                name="es_anuncio"
                defaultValue={true}
                {...register("es_anuncio", { required: true })}
              />
              <input
                type="text"
                className="hidden"
                name="fecha"
                defaultValue={getActualDate()}
                {...register("fecha", { required: true })}
              />
              <input
                type="text"
                className="hidden"
                name="id_usuario"
                defaultValue={id}
                {...register("id_usuario", { required: true })}
              />
              <div className="flex justify-end">
                <button
                  className="py-1 px-4 rounded-md bg-primary text-sm text-[#fff]"
                  type="submit"
                >
                  {loading ? (
                    <p className="loading loading-bars loading-sm text-[#fff]"></p>
                  ) : (
                    "Publicar"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ButtonModalNews;
