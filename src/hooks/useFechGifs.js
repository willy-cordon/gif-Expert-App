import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs";
// // si no tiene ninguna d¡ependencia se ejecuta solo una ves, (component didmount en clases)

export const useFechGifs = (category) => {
    const [state, setState] = useState({
        data : [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
          .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
           
          })
    }, [category])


    return state;
}
