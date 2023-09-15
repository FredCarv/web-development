import { useState } from "react"
import TesteStateFilho from "./TesteStateFilho"


export default function TesteState2(){
    const [valorState, setValorState] = useState(5)
    let valorVariavel = 5

    let aumentar = ()=>{
        setValorState(valorState + 5)
        valorVariavel += 5
    }

    let diminuir = ()=>{
        if(valorState == 0){
            alert("Valor chegou a 0. Não pode tirar mais")
        }
        else{
            setValorState(valorState - 5)
        valorVariavel -= 5
        }
        
    }
    

    return(
        <>
            <p>Valor State: {valorState}</p>
            <p>Valor Variável: {valorVariavel}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
            <TesteStateFilho valorState={valorState} aumentar={aumentar}/>
        </>
    )
}