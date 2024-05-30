import { Link } from "react-router-dom";
import errorImg from "../assets/iconError404.svg";
const Error404 = () => {
  return (
    <div className="flex justify-center items-center gap-4 flex-col md:flex-row h-[90vh]">
      <div className="w-[38rem]">
        <h1 className="text-[16.875rem] leading-[16rem] font-libre font-bold text-primary">
          404
        </h1>
        <h2 className="w-full text-[2.4rem] font-semibold">
          ¡Oh no, todo se ha derrumbado!
        </h2>
        <p className="text-base">
          Parece que la página que estás buscando ha desaparecido bajo los
          escombros. Pero no te preocupes, estamos aquí para ayudarte a
          encontrar el camino. Vuelve a la{" "}
          <Link to="/" className="text-primary underline">
            página principal
          </Link>
        </p>
      </div>
      <img src={errorImg} alt="Error 404" className="max-w-[23rem]" />
    </div>
  );
};

export default Error404;
