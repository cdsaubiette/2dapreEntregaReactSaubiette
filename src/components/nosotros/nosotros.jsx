import React from "react";

const Nosotros = () => {
    return(
        <div className="ItemListContainer">
            <h2>SOBRE NOSOTROS</h2>
            <p className="NosotrosP">En nuestra tienda, nos apasiona ofrecer ropa que combine lo mejor del mundo del desarrollo con estilo único. 
            Aquí, los programadores pueden encontrar camisetas con logos de sus lenguajes y herramientas favoritas. 
            ¡La cultura tech nunca fue tan cool!
            Creemos que la moda también puede ser una forma de expresión para todos aquellos que aman la tecnología y el código.
            Ya sea que estés trabajando en un proyecto o disfrutando de tu tiempo libre, nuestras prendas están pensadas para que te sientas cómodo y parte de esta comunidad.
            </p>
            
            <img src='https://i.ibb.co/gM6jzhgr/nosotros.jpg' alt="Imagen Nosotros" className='NosotrosImg' />
        </div>
    );
};

export default Nosotros;

// import React from "react";
// import nosotrosImage from '../../assets/nosotros.jpg';

// const Nosotros = () => {
//     return(
//         <div className="ItemListContainer">
//             <h2>SOBRE NOSOTROS</h2>
//             <p>En nuestra tienda, nos apasiona ofrecer ropa que combine lo mejor del mundo del desarrollo con estilo único. 
//             Aquí, los programadores pueden encontrar camisetas con logos de sus lenguajes y herramientas favoritas. 
//             ¡La cultura tech nunca fue tan cool!
//             Creemos que la moda también puede ser una forma de expresión para todos aquellos que aman la tecnología y el código.
//             Ya sea que estés trabajando en un proyecto o disfrutando de tu tiempo libre, nuestras prendas están pensadas para que te sientas cómodo y parte de esta comunidad.
//             </p>
            
//             <img src={nosotrosImage} alt="Imagen Nosotros" className='Nosotros' />
//         </div>
//     );
// };

// export default Nosotros;
