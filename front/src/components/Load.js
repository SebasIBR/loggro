import React from "react"
import '../assets/css/Load.css'
import noImage from '../assets/images/noImage.jpg'

function Load() {
    return (
        <main className="mainLoad">
            <section className="load">
                <img className="imgLoad" alt="img" src={noImage} />
                <button className="loadButton">Cargar Imagen</button>
            </section>
            <section className="save">
                <button className="saveButton">Guardar Imagen</button>
                <form className="formImage">
                    <input className="inputName" type={"text"} name="nombre" id ="nombre" placeholder="Ingrese su nombre"/>
                    <button type="submit" className="saveButton">Guardar en Base de datos</button>
                </form>
            </section>
        </main>
    )
}

export default Load