import React from "react";
import "../Estilos/EstilosContactos.css";

const Contactos = () => {
  
  return (
    <div className="body">

      <div className="texto">
        <h1>
          Somos La Mejor Academia, y Puedes Confiar En qie Con VLA
          Academy Aprenederas Lo Que Deseas y Obtendras Tu Trabajo
          Soñado
        </h1>
      </div>

      <div className="main-comtactos">
        <div className="image">
          <img
            src="https://s3.amazonaws.com/vla.academy/wp-content/uploads/2022/01/13164036/landing-copia-100-1536x864.jpg"
            width="750px"
            alt="form-imagen"
          />
          <img
            className="logo-form"
            src="https://s3.amazonaws.com/vla.academy/wp-content/uploads/2020/08/13160600/vlamerica-logo.png"
            alt="VLAlogo"
            width="200px"
          />
        </div>
        <div className="formulario">
          <h2 className="h2-form">
            Te preparamos con las habilidades que necesitas para un
            mejor futuro
          </h2>
          <hr />
          <h2 className="h2">Idiomas</h2>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Ingles Laboral
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Ingles Para niños A1 | A2
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Portugues Integral
            </label>
          </div>
          <h2 className="h2">Tecnologicos</h2>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Master Front End Web Developer
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Cisco
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Bootcamp Cisco CCNA
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Linux Administrator
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Amazon Web Services Cloud
              Practitioner
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Amazon Web Services Architect
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Microsoft SQL
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Ciberseguridad
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Programación Python
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Amazon Web Services Architect
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Microsoft Azure
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Marketing Digital
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Virtualización VMWare
            </label>
          </div>
          <h2 className="h2">Gerenciales</h2>

          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Gerencia de Proyectos
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Microsoft Excel Básico |
              Intermedio | Avanzado
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Lean Six Sigma Yellow Belt
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> Scrum Master Professional
            </label>
          </div>
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn-primary">
              <input type="checkbox" /> ITIL v4
            </label>
          </div>
          <div className="input-text">
            <form className="form">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Nombre</span>
              </label>
            </form>
            <form className="form">
              <input 
              type="tel"
              autoComplete="tel"
               required />
              <label className="lbl-nombre">
                <span className="text-nomb">Whatsapp</span>
              </label>
            </form>
            <form className="form">
              <input type="email" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Correo Electronico</span>
              </label>
            </form>
            <form className="form">
              <input type="text" required />
              <label className="lbl-nombre">
                <span className="text-nomb">Pais</span>
              </label>
            </form>
            <div className="textarea"> 
                <label className="label-text">
                <span>Comment</span>
              </label>
              <textarea rows="7" cols="90"></textarea>
            
            </div>
            <div className="input-buttom">
             <form action="/action_page_binary.asp" method="post">
              <input type='submit' value='Quiero Mas Informacion'  formenctype="multipart/form-data" />
              
              </form>
            </div>

            <div className='links-infer'>
              <a href="https://www.bitrix24.com/abuse/?b24_form_id=15&b24_address=https%3A%2F%2Fgrupovla.bitrix24.com&b24_form_address=https%3A%2F%2Fwww.vla.academy%2Fcontacto-vla%2F">Report abuse</a>
              <a href="https://www.bitrix24.com/abuse/?b24_form_id=15&b24_address=https%3A%2F%2Fgrupovla.bitrix24.com&b24_form_address=https%3A%2F%2Fwww.vla.academy%2Fcontacto-vla%2F">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4zS0AwDtW51F50_Klig8XskILU0SZYnAJg&usqp=CAU"
                  alt="interrogacion"
                  width="30px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
