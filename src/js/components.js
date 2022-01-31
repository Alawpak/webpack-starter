import '../css/componentes.css';

/* import webpacklogo from '../assets/imgs/webpack-logo.png'      

puede hacerse así para pruebas pero si queremos mover "fisicamente" 
la imagen o archivo en la carpeta dist usar otra forma*/

/*
{
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}
*/


export const saluda = (nombre) =>{      //con webpack y npm podemos exportar modulos

    console.log("Creando etiqueta h1...");

    const h1 = document.createElement("h1"); 
    h1.innerText = `¡Hola!, soy ${nombre}`
    document.body.append(h1)



} //se recomienda utilizar un script en en html, por lo que debemos utilizar importanciones y
//exportaciones.