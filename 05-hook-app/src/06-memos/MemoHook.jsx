import { useMemo, useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

const heavyStuff = ( iteration = 100 ) => {
    for (let i = 0; i < iteration; i++) {
        console.log('ahivamos')
        
    }

    return `${ iteration } it realizs..`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 4000 );
    const [show, setShow] = useState(true);

    const memorizedValue =  useMemo( () => heavyStuff(counter), [counter] )

  return (
    <>
        <h1>Conter:  <small>{ counter }</small> </h1>
        <hr />

        {/* <h4>{ heavyStuff(counter) }</h4> */}
        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>
  )
}
