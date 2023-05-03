import React from 'react';

export const Topbar = () => {
  return (
    <nav className="bg-blue-500 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <a href="#" className="text-white text-xl font-bold">
            Mi aplicación
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-4 font-medium"
          >
            Página de inicio
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-4 font-medium"
          >
            Acerca de nosotros
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 mx-4 font-medium"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};
