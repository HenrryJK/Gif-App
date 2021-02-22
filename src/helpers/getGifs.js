export const GetGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=4PdDJMP7JEqI0Lh3vg9XUytGVvTTuHSQ`
 
    const respuesta = await fetch(url);
  //  const data = await respuesta.json();
  const {data} = await respuesta.json();
 const gifs = data.map(img => {
     return{
         id:img.id , 
         title : img.title,
         url: img.images?.downsized_medium.url
     }
 })      
 return(gifs);
 // setImages(gifs);
 }