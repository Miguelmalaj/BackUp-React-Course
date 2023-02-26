

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

// const { edad, clave, nombre } = persona;

// console.log(edad)
// console.log(clave)
// console.log(nombre)

const useContext = ( { edad, clave, nombre, rango='Capitán' } ) => {
    // console.log(edad, clave, nombre, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona )
console.log( nombreClave, anios )
console.log( lat, lng )