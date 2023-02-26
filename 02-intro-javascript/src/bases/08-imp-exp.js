import heroes,{  owners } from '../data/heroes'

// console.log(owners)

export const getHeroeById = (id) => heroes.find(obj => obj.id === id)
// console.log( getHeroeById(2) )

export const getHeroesByOwner = ( owner ) => heroes.filter((own) => own.owner === owner)
// console.log( getHeroesByOwner('DC') );