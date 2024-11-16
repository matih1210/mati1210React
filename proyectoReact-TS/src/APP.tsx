// import { useState } from "react"
import { AppProduct } from "./components/AppProduct/AppProduct"
import { ComponenteCounter } from "./components/ComponenteCounter/ComponenteCounter"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { MiPrimerComponent } from "./components/MiPrimerComponente/MiPrimerComponent"

// Un componete siempre devuelve un solo elemento, puede ser un solo componente, o un div,etc con muchos componentes adentro
// un componente se puede montar y desmontar dinamicamente, cada vez que lo monto y desmonto es un cliclo de vida

export const App = () => {

    //     const[enableCounter, setEnableCounter] = useState(false);
  return (
    <div style={{display:'flex', flexDirection:'column', gap: '2vh'}}> 
    {/* <MiPrimerComponent text={"Texto desde propiedades"} color="red" fontSize={5}/>

    <ComponenteCounter/>
    <ComponentUseEffect/> */}
    {/* <FormComponent/> */}

    {/* {enableCounter && <ComponenteCounter/>}

    <button onClick={()=>{
        setEnableCounter(!enableCounter); // me cambia al contrario de enableCounter, si esta false me lo pasa a true y me muestra el counter y viceversa
    }}>Mostrar u ocultar Counter</button> */}
    
      <AppProduct/>
      
    </div>
  )
}
