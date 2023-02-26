import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( ( resolve, reject ) => {

//     setTimeout( () => {
//         // resolve();
//         const heroe = getHeroeById(2)
//         resolve(heroe)
//     }, 2000)

// })

// promesa.then( ( heroe ) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ))

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            // resolve();
            const heroe = getHeroeById( id )
            if ( heroe !== undefined ) resolve(heroe)
            reject( 'No se encontró el héroe' )
        }, 2000)
    })
}

getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn )