import "./Estilos/footer.css";

const Footer = () => {
  return (
    <div>
      <h4>CONTACOS</h4>
      <div className="footer">
        <div className="buttonYimg">
          <div className="imagen">
            <img
              src="https://s3.amazonaws.com/vla.academy/wp-content/uploads/2020/08/13160600/vlamerica-logo.png"
              width={"200px"}
              alt="img"
            />
          </div>
          <div className="boton">
            <a href="https://www.vla.academy/solicita-una-clase-gratuita/">
              <button>TAKE A FREE CLASS</button>
            </a>
          </div>
        </div>
        <div className="contactos">
          <div className="numeros">
            <p clasasName="panama">+507 833-5602</p>
            <p className="EEUU">+1 786-633-4717</p>
            <p className="CR">+506 4102 3282</p>
            <p className="España">+34 911 23 5522</p>
          </div>
          <div className="banderas">
            <img
              src="https://amp.protocolo.org/extfiles/PROTOCOLO2587-686866.jpg"
              width={"50px"}
              alt="Panama"
            />
            <img
              src="https://media.istockphoto.com/id/1174164981/es/vector/bandera-oficial-de-los-estados-unidos-de-am%C3%A9rica.jpg?s=612x612&w=0&k=20&c=07b_rUQZUPHd4uJn8je2kd0hMCWpKbK3Z2IYIEg5QYM="
              width={"50px"}
              alt="EEUU"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjyy2voCxLjJHrXTsKORSeu2VJNBjO0vZnGo4fQ9LWSO8B4SnCp06Pjox2IC_N4YkTQ&usqp=CAU"
              alt="CR"
              width={"50px"}
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcs7KI0W3EEkLDNZ99TKHGvMaqi0bLW_FWiJ2UCDCNN2aTgvNJXeOwg-hcqiQAotYnZSE&usqp=CAU"
              alt="España"
              width={"50px"}
            />
          </div>
        </div>

        <div className="linksFooter">
          <div className="links">
            <a href="https://www.vla.academy/empresarial/">
              ENTERPRISE VLA
            </a>
            <a href="https://www.vla.academy/blog/">BLOG</a>
            <a href="https://www.vla.academy/empresarial/#">TERMS</a>
          </div>
          <div className="con">
            <p>CONNECCT</p>
          </div>
        </div>
      </div>
      <p className="derechos">
        Copyright © Virtual Learning of America 2022
      </p>
    </div>
  );
};

export default Footer;
