import React from "react";
import "../Estilos/EmpleadosEstilos.css";
import RandomUsers from "../RandomUsers/RandomUsers";
// import Carousel from "react-gallery-carousel";
// import "react-gallery-carousel/dist/index.css";

const Empleados = () => {
  // const images = [9, 8, 7, 6, 5, 4, 3].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  //   link: "/google",
  // }));

  // const test = [
  //   {
  //     src: "/google",
  //     link: "",
  //   },
  //   {
  //     src: "",
  //     link: "",
  //   },
  // ];

  return (
    <div>
      <div>
        <RandomUsers />
      </div>
      {/* <Carousel
        
        style={{ height: 500, width: 800 }}
        hasMediaButton={false}
        hasSizeButton={false}
        hasIndexBoard={false}
        hasDotButtons={"bottom"}
        hasThumbnails={false}
        isAutoPlaying={true}
      >
        <>
          {images.length &&
            images.map((image) => (
              <a href={image.link}>
                {" "}
                <img src={image.src} />{" "}
              </a>
            ))}
        </>
      </Carousel>  */}
    </div>
  );
};
export default Empleados;
