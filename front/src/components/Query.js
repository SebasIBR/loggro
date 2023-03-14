import React from "react";
import "../assets/css/Query.css"

function Query() {
    return (
        <main className="mainQuery">
            <section className="queryForm">
                {/* Seccion de consulta de imagenes */}
                <form className="formQuery">
                    <label className="labelFormQuery">Fecha incial</label>
                    <input className="inputFormQuery" type={"date"}></input>
                    <label className="labelFormQuery">Fecha Final</label>
                    <input className="inputFormQuery" type={"date"}></input>
                    <label className="labelFormQuery">Seleccione hora a Consultar</label>
                    <select className="selectFormQuery">
                        <option className="optionFormQuery">Cargando...</option>
                    </select>
                    <button className="buttonQuery">Consultar</button>
                </form>
            </section>
            <section className="queryList">
                {/* Listado de imagenes que se han subido por dia */}
                <ul className="list">
                    <li>Cargando...</li>
                    <li>Cargando...2</li>
                </ul>

            </section>
        </main>
    )
}
export default Query