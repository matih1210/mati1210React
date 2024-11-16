import { useState } from "react"

export const ComponenteCounter = () => {
    const [counter, setCounter] = useState<number>(0) // useState, es un estado el cual nosotros podemos acceder a su variable modificarla y una vez que react detecta que esta valor a sido modificado manda a renderizar una parate especifica de la pagina la cual este ocupando 

    const incrementCounter = ()=>{
        setCounter((prev)=> prev+1);
    }

    const DecrementCounter = ()=>{
        if (counter > 0){
        setCounter((prev)=> prev-1);
        }
    }
    
  return (
    <div>

        <h2>Valor de counter: {counter}</h2>

        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={DecrementCounter}>Decrementar</button>


    </div>
  )
}
