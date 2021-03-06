 
 import { useState , useEffect } from "react";
 import { GetGifs } from '../helpers/getGifs';
 export const useFetchGifs =(category) => {
    const [state, setstate] = useState({
        data:[] ,
        loading: true
    });

    useEffect(() => {

        GetGifs(category)
        .then(imgs => {

            setTimeout ( () => {

            //    console.log(imgs);
                setstate({
                data: imgs,
                loading : false
            });
            } , 3000)
            
        })


    } , [category])


 /* setTimeout(() => {
        setstate({
            data:[ 1 ,2,3,4,5,6,7,8 ] ,
            loading: false 
        })
    }, 3000);*/



    return state;


  
 }