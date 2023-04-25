// ultimo commit debe decir PreEntrega1Ferreccio. NavBar debe incluir: titulo (giladitas3d), categorias clickeables, bootstrap, 
// NavBar componente contenedor y las categorias los componentes presentacionales.
//"hardcodear" código es escribir código que deberia ser automatizado o código que debería ser obtenido por el usuario final y no por el desarrollador.

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div style={{width: "100%", heigth: "100%"}}>
            <h1>Giladitas 3D </h1>
            <CartWidget/>
        </div>
    );
};

export default NavBar; 
