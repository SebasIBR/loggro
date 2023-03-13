import React from "react"
import '../assets/css/Load.css'

function Load(){
    return(
        <main className="main">
            <section>
                {/* Espacio para la imagen de muestra */}
                <button>Cargar Imagen</button>
            </section>
            <section>
                <button>Guardar Imagen</button>
                <button>Guardar en Base de datos</button>
            </section>
        </main>
    )
}

export default Load