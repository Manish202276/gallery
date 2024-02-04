import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from './Gallery';
export default function Gallerylist()
{   
    const [Galleryimage,setGalleryimage]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    async function download_gallery(){
        const response=await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
        const responsedata=response.data;
        const responsedataimg=responsedata.photos;
        const res=responsedataimg.map((galle)=>{
            return{
                photos:galle.url
            }
        })   
    setGalleryimage(res);
    setisLoading(false);
    }
    useEffect(()=>{download_gallery()},[])
    return(
        <>
            <div className="box">
                {(isLoading)?'Loading....':
                Galleryimage.map((p)=><Gallery image={p.photos} />)
                }      
            </div>
        </>
    )
}
