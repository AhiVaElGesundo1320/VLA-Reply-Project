import React, { useEffect, useState } from "react";
import Carousel from "react-gallery-carousel";

import "react-gallery-carousel/dist/index.css";
import "../Estilos/EstilosVLA.css";

const VLAAcademy = () => {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const results = [
      {
        src: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_hubspot-reporting-1080x675png__2L1dnlTA9IQtxFp82kjuw9Pv5UFFB8v50A9rUV6M.png",
        titulo: "Inicia tu Curso En Cisco",
      },
      {
        src: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_hubspot-reporting-1080x675png__2L1dnlTA9IQtxFp82kjuw9Pv5UFFB8v50A9rUV6M.png",
        titulo: "Inicia tu Curso En No Se",
      },
      {
        src: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_hubspot-reporting-1080x675png__2L1dnlTA9IQtxFp82kjuw9Pv5UFFB8v50A9rUV6M.png",
        titulo: "Inicia tu Curso En Algo",
      },
      {
        src: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_hubspot-reporting-1080x675png__2L1dnlTA9IQtxFp82kjuw9Pv5UFFB8v50A9rUV6M.png",
        titulo: "Inicia tu Curso En Algo",
      },
      {
        src: "https://cdn-e360.s3-sa-east-1.amazonaws.com/cms_hubspot-reporting-1080x675png__2L1dnlTA9IQtxFp82kjuw9Pv5UFFB8v50A9rUV6M.png",
        titulo: "Inicia tu Curso En Algo",
      },
    ];
    setImg(results);
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="main-VLA">
        <div className="text-btn-vla">
          <h1>TU CAMINO HACIA EL ÉXITO</h1>
          <p>
            Las empresas buscan personas con habilidades informáticas,
            gerenciales, de idiomas y mercadeo digital. Aprende con
            las clases 100% en vivo por Internet de VLA. Tu rumbo a un
            mejor empleo empieza aquí.
          </p>
          <div className="VLA-button">
            <a href="http://localhost:3000/Cursos">
              <button className="button-1">Ver Cursos</button>
            </a>
            <a href="https://www.vla.academy/solicita-una-clase-gratuita/">
              <button className="button-2">Clases Gratis</button>
            </a>
          </div>
        </div>
        {loading ? (
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">CARGANDO BRO!!!!</span>
          </div>
        ) : null}
        <div className="carousel-vla">
          <Carousel
            style={{ height: "600px", width: "100%" }}
            autoPlayInterval={2000}
            isLoop={true}
            hasTransition={true}
            isAutoPlaying={true}
            canAutoPlay={true}
            hasMediaButton={false}
            hasSizeButton={false}
            hasIndexBoard={false}
            hasDotButtons={"bottom"}
            hasThumbnails={false}
            
          >
            {img.length &&
              img.map((img) => (
                <>
                  <a href="https://www.vla.academy/course-marketing-digital/">
                    <img src={img.src} alt="imf" width="100%" />
                    <p>{img.titulo}</p> 
                  </a>
                </>
              ))}
          </Carousel>
        </div>
      </div>
      <div className="cursos-tipos">
        <div className="card-cur">
          <img
            src="https://blogthinkbig.com/wp-content/uploads/sites/4/2015/07/shutterstock_148972376.jpg?resize=500%2C334"
            alt="immgane"
            width="270px"
            height="120px"
          />
          <a href="http://localhost:3000/Cursos">
            Cursos de Tecnologia
          </a>
        </div>

        <div className="card-cur">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_1O-lNhDXkf6UA9fkYfnEn6VdmDxMAEtlTwSb-7cl0AIRKAUS-WpsYGOS6q8PosYWKE&usqp=CAU"
            alt="immgane"
            width="270px"
            height="120px"
          />
          <a href="http://localhost:3000/Cursos">Cursos de Idiomas</a>
        </div>

        <div className="card-cur">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKpkadQ7knP2ccURL0PB92QyhICmyJtMeszvDz_ZANnZHp8L-Jj66-bu9kKZUR_Amnmg&usqp=CAU"
            alt="immgane"
            width="270px"
            height="120px"
          />
          <a href="http://localhost:3000/Cursos">
            Cursos Gerenciales
          </a>
        </div>

        <div className="card-cur">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR418L8ukF3sxlLd3K-ipkPO5qiirOkfXIa3APFCLap1FPcgZWUFH8JsvqRetCkg6zg_A&usqp=CAU"
            alt="immgane"
            width="270px"
            height="120px"
          />
          <a href="http://localhost:3000/Cursos">Cursos Para Niños</a>
        </div>

        <div className="card-cur">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-06NJEIP9YJNVepJJ8QIOtI7A9dTUWY6HiTsp6QS2lwjnM-DPKRS2h7Xa8JH6MPMa8Dk&usqp=CAU"
            alt="immgane"
            width="270px"
            height="120px"
          />
          <a href="http://localhost:3000/Cursos">
            Una Gran Variedad de Cursos
          </a>
        </div>
      </div>
      <div>
        <div className="qestn">
          <h1 className="big-qestn">¿Por qué elegir a VLA?</h1>
          <p className="pre-text">
            Con VLA adquieres habilidades profesionales con clases
            100% en vivo, certificados y títulos en línea. Aquí vamos
            un paso más allá y te preparamos para trabajar
            directamente con algunas de las empresas más importantes
            del mundo.
          </p>
        </div>
        <div className="fila-de-imgtext">
          <div className="tarjeta">
            <div className="img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYKt2sVU6aq5Wa4wcFVv9SFWEH5PQgn3wh8Qmq2ssuUL-Od2uOLK-jjG3Id8kvSCxFM0&usqp=CAU"
                alt="100%-live"
              />
            </div>
            <div className="parrafos">
              <span className="spn">
                <b>100% En Vivo</b>
              </span>
              <p className="pafo">
                Todas las clases de VLA son dictadas en vivo, con un
                método de enseñanza único. Las clases en vivo de VLA
                permiten a todos nuestros estudiantes interactuar con
                sus profesores y responder todas sus dudas en tiempo
                real.
              </p>
            </div>
          </div>
          <div className="tarjeta">
            <div className="img">
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-vector-plano-certificado-mano-persona-que-recibe-certificado-finalizacion-cursos-educacion-adicionales-graduacion-desarrollo-concepto-documento_74855-24607.jpg?w=2000"
                alt="certificated"
                width="250px"
              />
            </div>
            <div className="parrafos">
              <div className="spn-stl">
                <span className="spn">
                  <b>Certificate con VLA</b>
                </span>
              </div>
              <p className="parrafo-terco">
                En VLA te ayudamos a mejorar tus habilidades, con
                profesores certificados y una amplia experiencia en la
                materia, ventajas que te ayudarán a desarrollarte con
                éxito en el campo laboral.
              </p>
            </div>
          </div>
          <div className="tarjeta">
            <div className="img">
              <img
                src="https://www.enriquedans.com/wp-content/uploads/2020/11/online-education-1024x892.png"
                alt="vrtl-lssn"
                width="210px"
              />
            </div>
            <div className="parrafos">
              <span className="spn">
                <b>Clases Virtuales</b>
              </span>
              <p className="pafo">
                Gracias al avance de la tecnología, hoy podemos
                estudiar desde la comodidad de nuestros hogares,
                oficinas o cualquier parte del mundo. Usamos la
                tecnología a tu favor para que avances fácilmente en
                todos los contenidos de nuestros cursos.
              </p>
            </div>
          </div>
        </div>
        <div className="boton-team">
          <a href="http://localhost:3000/Contactos">
            <button>Conoce Mas De VLA</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VLAAcademy;
