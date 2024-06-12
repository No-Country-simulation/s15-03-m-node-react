import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-Building.png";
import { useContext } from "react";
import Context from "../../context/Context";
import { jwtDecode } from "jwt-decode";

function NavBar() {
  const { authTokens, logoutUser } = useContext(Context);

  let { nombre, apellido, id, rol } = {};

  if (authTokens) {
    ({ nombre, apellido, id, rol } = jwtDecode(authTokens));
  }

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#carouselclient" className="hover:text-primary">
                Caracteristicas
              </a>
            </li>
            <li>
              <a href="#postaboutus" className="hover:text-primary">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:text-primary">
                Planes
              </a>
            </li>
            <li>
              <a href="/#contactForm" className="hover:text-primary">
                Contacto
              </a>
            </li>
            <li>
              <Link className="hover:text-primary" to="/register-admin">
                Registrarse
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary" to="/login">
                Inicio sesión
              </Link>
            </li>
          </ul>
        </div>

        <Link to={authTokens ? "/welcome-navigation" : "/"}>
          <img className=" w-52 ml-11 " src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-base-content font-bold  g-wider">
        <ul className="menu menu-horizontal px-1">
          {authTokens ? (
            (rol === "admin" && (
              <>
                <li>
                  <Link to="/list-admin">Aprobacion de recidentes</Link>
                </li>
                <li>
                  <Link to="/reservation">Espacios comunes</Link>
                </li>
                <li>
                  <Link to="/neigbor-group">Sala de negocios</Link>
                </li>
              </>
            )) ||
            (rol === "resident" && (
              <>
                <li>
                  <Link to="/incident-report">Incidentes</Link>
                </li>
                <li>
                  <Link to="/reservation">Espacios comunes</Link>
                </li>
                <li>
                  <Link to="/board">Sala de negocios</Link>
                </li>
                <li>
                  <Link to="/neigbor-group">Vecinos</Link>
                </li>
              </>
            ))
          ) : (
            <>
              <li>
                <a href="#carouselclient" className="hover:text-primary">
                  Caracteristicas
                </a>
              </li>
              <li>
                <a href="#postaboutus" className="hover:text-primary">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-primary">
                  Planes
                </a>
              </li>
              <li>
                <a href="#contactForm" className="hover:text-primary">
                  Contacto
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end tracking-wider hidden lg:flex">
        {authTokens ? (
          <>
            <div className="dropdown dropdown-end">
              <div className="avatar items-center" role="button" tabIndex={0}>
                <p className="font-medium mr-2">{`${nombre} ${apellido}`}</p>
                <div className="w-14 rounded-full border border-primary">
                  <img src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-[20rem] flex gap-2"
              >
                <p className="font-medium text-center text-lg">Mi Cuenta</p>
                <div className="divider divider-primary m-0 h-[1px]"></div>
                <li>
                  <Link to={`/profile/${id}`}>Mi perfil</Link>
                </li>
                <div className="divider divider-primary m-0 h-[1px]"></div>
                <li>
                  <button>Cambiar al modo oscuro</button>
                </li>
                <div className="divider divider-primary m-0 h-[1px]"></div>
                <li>
                  <button>Configuracion y privacidad</button>
                </li>
                <div className="divider divider-primary m-0 h-[1px]"></div>
                <li>
                  <button>Ayuda y soporte técnico</button>
                </li>
                <div className="divider divider-primary m-0 h-[1px]"></div>
                <li>
                  <button
                    className="btn btn-outline btn-secondary"
                    onClick={logoutUser}
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              className="btn m-2 font-bold font-worksans border-none bg-transparent "
              to="/register-admin"
            >
              Registrarse
            </Link>
            <Link
              className="btn m-2 font-bold font-worksans bg-secondary"
              to="/login"
            >
              Inicio sesión
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
