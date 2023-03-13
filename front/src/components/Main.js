import React from "react";
import '../assets/css/Main.css'

function Main() {
    return (
        <main className="main">
                <div className="buttonMain">
                    <a href="/carga">Cargar Imagen</a>
                </div>
                <div className="buttonMain">
                    <a href="/consulta">Consultar Imagenes</a>
                </div>
        </main>
    )
}
export default Main