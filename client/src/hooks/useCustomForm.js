import { useForm } from "react-hook-form";

// le puedo pasar la url de la api como parametro para reutilizarlo con otra api o algo asi y te va a servir para los otros formularios
function useCustomForm() {
  // const [errorsBackend, setErrorsBackend] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Por ahora solo muestro la info en consola despues puedo usar lo de axios
  const onSubmit = (data) => {
    // En esta funcion se mandaria al backend los datos o al context
    console.log(data);
  };

  // conectado a la api seria asi:

  // const onSubmit = async (data) => {
  //   try {
  //     const res = await axios.post(urlApi, data);
  //   } catch (error) {
  //     if (error.response) {
  //       setErrorsBackend(error.response.data);
  //     } else if (error.request) {
  //       console.error('No se recibió respuesta del servidor:', error.request);
  //       setErrorsBackend('No se recibió respuesta del servidor. Por favor, inténtelo de nuevo más tarde.');
  //     } else {
  //       console.error('Error al enviar la solicitud:', error.message);
  //       setErrorsBackend('Hubo un problema al procesar su solicitud. Por favor, inténtelo de nuevo más tarde.');
  //     }
  //   }
  // }

  return { register, handleSubmit, watch, errors, onSubmit };
}

export default useCustomForm;
