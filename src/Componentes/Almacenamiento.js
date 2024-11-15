import React, { useEffect, useState } from "react";

export const Almacenamiento = () =>{
    const [nombre, setNombre] = useState("")
    const [listaNombre, setListaNombre] = useState([])


    useEffect(() =>{
        //const nombreGuardado = localStorage.getItem("nombreReact")
        const nombresGuardado = localStorage.getItem("nombres")
        if (nombresGuardado){
            setListaNombre(JSON.parse(nombresGuardado))
        }
    },[])

    const handleChange = (e) =>{
        setNombre(e.target.value)
    }

    const guardarNombre = () =>{
        /*localStorage.setItem("nombreReact", nombre)
        setNombre("")*/

        if(nombre.trim() == "") return

        const nuevaLista = [...listaNombre, nombre]
        setListaNombre(nuevaLista)
        localStorage.setItem("nombres", JSON.stringify(nuevaLista))
        setNombre("")

    }

    return(
        <div>
            <h1>Guardar en localStorage</h1>
            <input type="text" value={nombre} onChange={handleChange} placeholder="ingresa un nombre"></input>
            <button onClick={guardarNombre}>Guardar</button>
            <br></br>
            <h2>Lista de nombres</h2>
            <ul>
                {listaNombre.map((nom, index) =>(
                    <li key={index}>{nom}</li>
                ))}
            </ul>
        </div>
    )
}