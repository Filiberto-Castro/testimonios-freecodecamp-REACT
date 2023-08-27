import React from "react";
import '../stylesheets/Testimonio.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio'
                src={require(`../img/testimonio-${props.imagen}.png`)}
                alt={`Foto de ${props.imagen}`} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> in {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} at <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio" dangerouslySetInnerHTML={{ __html: `"${props.testimonio}"` }} />
            </div>
        </div>
    );
}

export default Testimonio;