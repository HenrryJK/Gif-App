import React , {useState , useEffect} from 'react'

export const GifGrid = ({category}) => {
    const  [count, setcount] = useState(0);

    useEffect(() => { 
        GetGifs();
    } , [])

   const GetGifs = async () => {
       const url = 'https://api.giphy.com/v1/gifs/search?q=music&limit =10&api_key=4PdDJMP7JEqI0Lh3vg9XUytGVvTTuHSQ'
    
       const respuesta = await fetch(url);
     //  const data = await respuesta.json();
     const {data} = await respuesta.json();
    const gifs = data.map(img => {
        return{
            id:img.id , 
            tittle : img.tittle,
            url: img.images?.downsized_medium.url
        }
    })      
    console.log(gifs);


    }
    // GetGifs();
    return (
        <div>
            <h3>{ category }</h3>
            <h3>{count}</h3>
            <button onClick={() => setcount(count + 1 )}></button>
        </div>
    )
}