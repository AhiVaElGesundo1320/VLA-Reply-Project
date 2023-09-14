import './App.css';
import React from 'react';
// import Carousel from 'react-gallery-carousel'
// import 'react-gallery-carousel/dist/index.css';
import { Route,Routes } from 'react-router-dom';
import AcercaDe from './Components/pages/AcercaDe';
import Contactos from './Components/pages/Contactos';
import Cursos from './Components/pages/Cursos';
import Empleados from './Components/pages/Empleados';
import Layout from './Components/pages/Layout';
import VLAAcademy from './Components/pages/VLAAcademy';
import Footer from './Components/Footer';
import AnuncioNav from './Components/AnuncioNav';



function App() {
  // const images = [1, 2, 3, 4, 5, 6, 7].map((number) => ({
  //   src: `https://placedog.net/${number}00/${number}00?id=${number}`
  // }));
  return (
    <div>
      {/* <Carousel images={images} style={{ height:500, width: 800}}/> */}
      <AnuncioNav />
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<VLAAcademy />} />
            <Route path='cursos' element={<Cursos />} />
            <Route path='contactos' element={<Contactos />} />
            <Route path='empleados' element={<Empleados />} />
            <Route path='acercade' element={<AcercaDe />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
