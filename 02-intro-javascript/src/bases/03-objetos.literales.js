

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5554454,
        lat: 14.22222,
        lng: 34.65644
    }
};

const persona2 = { ...persona }
persona2.nombre = 'Peter';



console.log( persona )
console.log( persona2 )