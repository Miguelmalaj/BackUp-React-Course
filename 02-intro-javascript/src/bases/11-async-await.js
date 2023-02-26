
// const getImagenPromesa = () => new Promise( resolve => resolve('https://alksjdfjsj.com') )
// getImagenPromesa().then( console.log ) 

const getImagen = async() => {

    try {
        const apiKey = 'aNmmWIojaXOsG10xKoNWWN7eNP5OI3IY'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await resp.json()

        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src= url;

        document.body.append( img );    
        
    } catch (error) {
        console.erro(error)
    }

    
}

getImagen();