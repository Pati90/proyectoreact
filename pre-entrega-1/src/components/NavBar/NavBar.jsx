// ultimo commit debe decir PreEntrega1Ferreccio. NavBar debe incluir: titulo (giladitas3d), categorias clickeables, bootstrap, 
// NavBar componente contenedor y las categorias los componentes presentacionales.
//"hardcodear" código es escribir código que deberia ser automatizado o código que debería ser obtenido por el usuario final y no por el desarrollador.

import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <div style={{margin: "1cm", width: "100%", heigth: "100%"}}>
            <h1>Giladitas 3D </h1>
          
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
  <a class="navbar-brand" href="#"><CartWidget/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Acerca de</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Servicios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default NavBar; 
