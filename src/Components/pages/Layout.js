import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../Estilos/Navbar.css'


const Layout = () => {
  return (
    <div style={{position:"sticky"}}>

      <div className="Nav"  >
      <nav>
      
      <ul>
         <div className='logo'>
           <li className='li-nav' >
            <NavLink end to="/">
              <div className="rx7" >
              <img
                src="https://s3.amazonaws.com/vla.academy/wp-content/uploads/2020/08/13160600/vlamerica-logo.png"
                width="200px"
                alt="logo"
              />
              </div>
            </NavLink>
          </li>
         </div>
         <div className='navbar'>
         <li >
            <NavLink className="active"  to="./Cursos" >Catalogo De Cursos</NavLink>
          </li>
          <li>
            <NavLink to="./Contactos">Contacto VLA</NavLink>
          </li>
          <li>
            <NavLink to="./Empleados">VLA Team</NavLink>
          </li>
          <li>
            <NavLink to="./AcercaDe">Acerca de</NavLink>
          </li>
         </div>
        </ul>
      
      </nav>
      </div>


      <Outlet />
    </div>
  );
};

export default Layout;
