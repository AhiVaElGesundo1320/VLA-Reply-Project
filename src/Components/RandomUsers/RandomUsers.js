import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Carousel from "react-gallery-carousel";
// import "react-gallery-carousel/dist/index.css";
import "../Estilos/UsersEstilos.css";

const RandomUsers = () => {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   fetch("https://api.randomuser.me/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       const userData = {
  //         name: data.results[0].name.first,
  //         phone: data.results[0].phone,
  //         email: data.results[0].email,
  //         picture: data.results[0].picture.medium,
  //       };
  //       console.log(userData);
  //       setUser(userData);
  //       setLoading(false)
  //     });
  // }, []);

  // const [img, setImg] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("https://api.randomuser.me/?results=15")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       const results = data.results.map((item) => {
  //         return {
  //           src: item.picture.large,
  //           name: item.name.first,
  //           lastName: item.name.last,
  //           email: item.email,
  //           id: item.id,
  //         };
  //       });
  //       setImg(results);
  //       setLoading(false);
  //       console.log(results);
  //     });
  // }, []);

  // console.log(img);

  return (
    <div>
      <div>
        {/* {loading ? (
          <div className="spinner-border text-dark" role="status">
            <span className="sr-only">CARGANDO BRO!!!!</span>
          </div>
        ) : null} */}

        {/* {img ? ( */}
          <div style={{ border: "red solid 2px" }}>
            <Carousel
              style={{ height: "100px" }}
              width={"100%"}
              autoPlay={true}
              interval={2000}
              infiniteLoop={true}
              showStatus={false}
              showArrows={true}
              
              swipeable={true}
              stopOnHover={true}
              transitionTime={500}
              swipeScrollTolerance={5}
              centerSlidePercentage={20}
              centerMode={true}
              showThumbs={false} 
              
            >
              <div  className='div-carsouel-img'>
                    <img className='carousel-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSef4MyU2VYwfN5PW6tmnIRmO66RlZtEyyXE4z2j5jclvd8IgebflYo_T2qUocO5MeVvfs&usqp=CAU" alt='img' />
                    <h1 className="legend">Mr. Esteban R</h1>
                    
                </div>

                <div className="div-carsouel-img">
                    <img className='carousel-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6Le9kNLsacLlP1iRadiUbYVRqQDAl-9kAQ&usqp=CAU" alt='img' />
                    <h1 className="legend">Mr. Carlos V</h1>
                    
                </div>

                <div className="div-carsouel-img">
                    <img className='carousel-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8ZibjKc6OXlr_DuMoKalrVpDEeCT6DsBVg&usqp=CAU" alt='img' 
                    height='230px'
                    />
                    <h1 className="legend">Mr. Carlos V</h1>
                    
                </div>

                <div className='div-carsouel-img'>
                    <img className='carousel-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgDNxXzKkZHfnGgLHV-A-R3IOsqW20qb2SFVwy02ezMTlya9m8OwUqUIdf5pNdeTxEwI&usqp=CAU" alt='img' />
                    <h1 className="legend">Mr. Carlos V</h1>
                    
                </div>

                <div className='div-carsouel-img'>
                    <img className='carousel-img' src="https://www.ucr.ac.cr/medios/fotos/2021/foto-3-marco-arias-vargas-eii610d92c0741ea.jpg" alt='img' />
                    <h1 className="legend">Mr. Carlos V</h1>
                    
                </div>

                <div className='div-carsouel-img'>
                    <img className='carousel-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEHydqGa_Yjm98XruJwwUtUoqjXBi_tibwg&usqp=CAU" alt='img' 
                    height='230px' />
                    <h1 className="legend">Mr. Carlos V</h1>
                    
                </div>
                
                <div className='div-carsouel-img'>
                    <img className='carousel-img' src="https://www.udep.edu.pe/hoy/wp-content/uploads/sites/49/2019/06/Isabel-Gonzalez.jpg" alt='img' 
                    height='230px' />
                    <h1 className="legend">Mr. Carlos V</h1>
                    
                </div>
                  
                

            </Carousel>
          </div>
        {/* ) : null} */}
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
      {/* { loading ? (<div className="spinner-border text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>) : null}
      {user ? (
        <div>
          <img src={user.picture} alt="img" width="150px" />
          <h2>{user.name}</h2>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
      ) : null}  */}
    </div>
  );
};

export default RandomUsers;
