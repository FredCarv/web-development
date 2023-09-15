import { useState } from 'react'

export default function TesteState(){
    const [aluno, setAluno] = useState("Fred")

    return(
        <>
            <p>Aluno: {aluno}</p>
            <button onClick={()=>setAluno("Maria")}>Mudar</button>
        </>
    )
}