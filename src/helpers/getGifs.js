
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FjDOX63pqpL9ZTuiHK8RpxPpvmNQkr0c&limit=10&q=${ encodeURI(category)}`;

    const resp  = await fetch(url);
    const {data}  = await resp.json();
    
    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}