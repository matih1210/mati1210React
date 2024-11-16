import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {

    const [state, setState] = useState(false)

    useEffect(()=>{
        console.log("Componente Montado"); // Despuesse muestra esto que es una ves que se monta (mirar en consola)
        return ()=>{
            console.log("Componente desmontado") // Primero aparece eso porque es antes de montarse
        }
    },[]) // [] la consicion vacia indica que eso va a aparecer al momento que se monta

    useEffect(()=>{
        console.log(state);
    },[state]) // se ejecuta el efecto una vez que cambio de estado, depende del cambio de una variable


  return (
    <div>
        <p>{state ? "Es true" : "Es false"}</p>
        <button onClick={()=>{
            setState(!state);
        }}>
            Cambiar State
        </button>
    </div>
  )
}
