import React from "react";
import "../Estilos/EstilosAcercade.css";

const AcercaDe = () => {
  
  return (
    <div className="aboutus-body">
      <div className="acercaDe-main">
        <div className="aboutus-title">
          <h1>Acerca de Nosotros</h1>
        </div>
        <div className="aboutus_text">
          <p>
            Esta es una "replica" insipirada en la Pagina de{" "}
            <a href="https://www.vla.academy/">VLA Academy,</a> con el
            unico fin de mejorar mis habilidades de programacion y
            aprender mas del tema durante la marcha{" "}
          </p>
        </div>

        <div className="aboutus-more-text">
          <p>
            Unicamente soy un chico aprendiendo a programar con ganas
            de retos y trabajo
          </p>
        </div>
      </div>
      <div className="card-acercade">
       
       <div className="about-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QjKeFGaEdIt4OKSha47qYksFAPPmHI0rIJvHVLOpWnN0iFPCIKB-ZAyC4G2911on2sk&usqp=CAU"
            alt="y0"
            width="200px"
          />
        </div> 
        <h3>Soy: Ethan Martinez</h3>
        <h3>Contactame:</h3>
        <div className="aboutus-contact">
          <p>correoelectronico@gmail.com</p>
          <h2>
            GitHub:<p>github</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
