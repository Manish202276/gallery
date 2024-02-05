import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from './Gallery';
export default function Gallerylist()
{   
    const [Galleryimage,setGalleryimage]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    const [offvalue,setoffvalue]=useState(0);
    const [url,seturl]=useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offvalue}&limit=20`);
        async function download_gallery(){
        const response=await axios.get(url);
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
    useEffect(()=>{download_gallery()},[url])
    return(
        <>
            <div className="box">
                {(isLoading)?'Loading....':
                Galleryimage.map((p)=><Gallery image={p.photos} />)
                }      
            </div>
            <div className='next'>
                <button onClick={()=>seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offvalue=offvalue-20}&limit=20`)} className='previous-button'>Previous</button>
                <button onClick={()=>seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offvalue=offvalue+20}&limit=20`)} className='next-button'>Next</button>
            </div>
        </>
    )
}
