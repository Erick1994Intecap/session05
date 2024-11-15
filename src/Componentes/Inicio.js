import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Button} from "react-bootstrap";

export const Inicio =() =>{
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

    const limpiarStorage = () =>{
        localStorage.removeItem("nombres");
    }
    

    return (
        <Container className="mt-4">
            <Card>
                <Card.Header className="text-center bg-primary text-white">
                    <h2>Lista en LocalStorage</h2>
                </Card.Header>
                <Card.Body>
                    <ListGroup>
                        {listaNombre.map((nom, index) => (
                            <ListGroup.Item key={index}>
                                {nom}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
                <Card.Footer>
                    <Button 
                        className="w-30" 
                        variant="secondary" 
                        onClick={limpiarStorage}
                    >
                        Limpiar
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
}