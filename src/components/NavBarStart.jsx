import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/CompleteLogo.svg";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { MinMen } from "./MinMen";
import { useState } from "react";
import { CiLogout,CiCircleInfo,CiChat2,CiUser } from "react-icons/ci";

export const NavBarStart = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className='fixed w-screen   bg-white border-gray-200 border-b-2'>
		<div className='flex flex-wrap items-center justify-between mx-auto p-3'>
		<div className='flex items-center gap-2'>
          <Link to="https://www.uao.edu.co/" className="flex items-center">
            <img src={Logo} className="h-20 mr-1" alt="GAE Logo" />
          </Link>
			<div className='flex gap-2'>
            <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <NavLink
                  to="/inicio#"
                  className={({ isActive }) =>
                    (isActive
                      ? " text-white md:text-red-700 md:bg-transparent"
                      : " text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700") +
                    "block py-2 pl-3 pr-4 rounded md:p-0"
                  }
                  aria-current="page"
                >
                  Inicio
                </NavLink>
              </li>
              <li>
			  <NavLink
                  to="/inicio#"
                  className={({ isActive }) =>
                    (isActive
                      ? " text-white md:text-red-700 md:bg-transparent"
                      : " text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700") +
                    "block py-2 pl-3 pr-4 rounded md:p-0"
                  }
                  aria-current="page"
                >
                  Agendar
                </NavLink>
              </li>
              <li>
			  <NavLink
                  to="/inicio#"
                  className={({ isActive }) =>
                    (isActive
                      ? " text-white md:text-red-700 md:bg-transparent"
                      : " text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700") +
                    "block py-2 pl-3 pr-4 rounded md:p-0"
                  }
                  aria-current="page"
                >
                  Historial Asesorias
                </NavLink>
              </li>
            </ul>
          </div>
		  </div>
		  <div className="flex items-center md:order-2 pr-3">
            <button
              onClick={handleShow}
              type="button"
              className={`flex  mr-3 text-sm bg-white md:mr-0 ${show ? "outline-none border rounded-lg shadow-outline-gray" : ""}`}
              id="user-menu-button"
            >
              <span className="sr-only">Open user menu</span>
              <AiOutlineMenu className=" text-2xl"></AiOutlineMenu>
            </button>
            <div
              className={`${show ? "" : "hidden"} fixed top-20 right-3 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                  Daniel Morales
                </span>
                <span className="block text-sm  text-gray-500 truncate">
                  usuario@uao.edu.co
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
					<CiUser className="text-2xl"></CiUser>
                    Mi perfil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <CiCircleInfo className="text-2xl"></CiCircleInfo> Ayuda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
					<CiChat2 className="text-2xl"></CiChat2>
                    Sugerencia
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
					<CiLogout className="text-2xl"></CiLogout>	
                    Cerrar Sesion
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="hidden w-full md:block md:w-auto"
            id="mobile-menu-2"
          ></div>
        </div>
      </nav>
    </>
  );
};
