import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useCustomForm({ urlApi, sendTo }) {
  const [errorsBackend, setErrorsBackend] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(urlApi, data);
      console.log({ urlApi, data, sendTo, response });
      setErrorsBackend(null);
      if (sendTo) {
        navigate(sendTo);
      }
    } catch (error) {
      if (error.response) {
        setErrorsBackend(error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
        setErrorsBackend(
          "No se recibió respuesta del servidor. Por favor, inténtelo de nuevo más tarde."
        );
        setLoading(false);
      } else {
        console.error("Error al enviar la solicitud:", error.message);
        setErrorsBackend(
          "Hubo un problema al procesar su solicitud. Por favor, inténtelo de nuevo más tarde."
        );
        setLoading(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    onSubmit,
    errorsBackend,
    loading,
  };
}

export default useCustomForm;
