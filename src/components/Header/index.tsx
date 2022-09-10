import React, { useEffect, useReducer, useState } from "react";
import { Card } from "../Card"
import { Container } from "./styles" 

interface IPropsStudent {
    name?: string;
    time?: Date|undefined;
}

export function Header () {
    const [studentName, setStudentName] = useState("");
    const [student, setStudent] = useState<IPropsStudent[]>([]);
    const [user, setUser] = useState({ name:'', avatar:'' });
    
    function handleAddStudent() {
        const newStudent = {
            name:studentName,
            time: new Date() .toLocaleTimeString("pt-BR",{
                hour:"2-digit",
                minute:"2-digit",
                second:"2-digit"
            })
        }

    setStudentName("")

    setStudent((prevState:any)=> [...prevState, newStudent])
    }

    useEffect(() => {
        fetch("https://api.github.com/users/edersonpaixao21")
        .then((response) => response.json())
        .then((data) => {
            setUser({
                name: data.name,
                avatar: data.avatar_url,
            });
        });
    }, [])
   
    return (
        <Container>
            <header>
                <h1>Lista de Presença</h1>
                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Foto de perfil" />
                </div>
            </header>
            <input type="text" placeholder="Digite o nome..." onChange={(e) => setStudentName(e.target.value)} value={studentName}/>
            <button type="button" onClick={handleAddStudent}> Adicionar </button>

        
         {student.map((student:any) => (
            <Card key={student.time} name={student.name} time={student.time}/>
        ))} 
        
        </Container>
    )
}