import React , {/* useState , useEffect*/ } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { GetGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const  [count, setcount] = useState(0);

    // ejemplo de useFecth 
    // const state = useFetchGifs(); 
    // const {data , loading} = useFetchGifs(); 
    const {  loading} = useFetchGifs();
  //  console.log(state);


    // tiene un arreglo vacio ([]);
   /* const [images, setImages] = useState([]);
    useEffect(() => { 
        GetGifs(category).then(setImages);
     //  GetGifs(category).then(imgs => setImages(imgs));
    } , [category])*/

   
    // GetGifs();
    return (
        <>
          <h3>{ category }</h3>

          { loading ? 'Cargando.....' : 'Data cargada..!'}
      { /*   <div className="card-grid">
        
                    {/*
                        //  images
                    images.map( img =>  (
                        <GifGridItem  
                        key={img.id}
                       {...img}
                        />
                    ))
                    }
                 
                  </div> */}
    
          </>
          /*    <h3>{count}</h3>
            <button onClick={() => setcount(count + 1 )}></button>*/
    )
  
}