
// prop: Parametros que recibe nuestra funcion

import { FC } from "react"

interface IPropsMIPrimerComponent{
    text: string;
    color: string;
    fontSize?: number // el ? es para que no sea obligatoria un atributo
}

export const MiPrimerComponent: FC<IPropsMIPrimerComponent> = ({text, color, fontSize}) => {
  return (
    <div style={{ color: `${color}`, fontSize: `${fontSize || 1}rem`}}><p>{text}</p></div>
  )
}
