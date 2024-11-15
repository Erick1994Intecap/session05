import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const NuevoElemento =() =>{
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

    

    return (
        <Container className="mt-4">
            <h2 className="text-center">Guardar en LocalStorage</h2>
            <Form className="mt-3">
                <Form.Group controlId="nombreInput">
                    <Form.Control
                        type="text"
                        value={nombre}
                        onChange={handleChange}
                        placeholder="Ingresa un nombre"
                    />
                </Form.Group>
                <Button 
                    className="w-30" 
                    variant="primary" 
                    onClick={guardarNombre}
                >
                    Guardar
                </Button>
                
            </Form>
        </Container>
    );
}