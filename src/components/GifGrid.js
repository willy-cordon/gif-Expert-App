import React, { Fragment } from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFechGifs( category )


    return (
        <Fragment>
            
        <h3 className="animate__animated animate__bounce">{category}</h3>
        
        { loading && <p className="animate__animated animate__flash ">Loading</p> }
       
            <div className="card-grid">
        
                {
                    images.map(img =>(
                        <GifGridItem 
                        key = {img.id} 
                        {...img}  
                        />
                    
                        ))
                    }
                
            </div>

        </Fragment>
    )
}

//rafc para crear una estructura basica