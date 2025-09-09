
const getImagen = async() =>{

    try {
        const apiKey = 'bwAWcMGxoZdG39sIdbNsnxFrVG3RI6s6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
        const { data } = await resp.json()

        const { url } = data.images.original

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.info( error );
    }

}

getImagen();

