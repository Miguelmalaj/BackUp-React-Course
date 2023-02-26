
const personajes = [ 'Goku', 'Vegeta','Trunks' ];

const [ , , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log( letras, numeros );

const auseState = ( valor ) => {
    return [ valor, ()=>{console.log('Hello planet')} ]
}

const [nombre, setNombre ] = auseState( 'Goku' );

console.log( 'nom',nombre );
setNombre()