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
                photos:galle.url,
                title:galle.title
                
            }
        })   
    setGalleryimage(res);
    setisLoading(false);

    console.log(res[0].photos,res[0].title);

    }
    useEffect(()=>{download_gallery()},[url])
    return(
        <>
            <div className="box">
                {(isLoading)?'Loading....':
                Galleryimage.map((p)=><Gallery image={p.photos} title={p.title} />)
                }      
            </div>
            <div className='next'>
                <button disabled={offvalue===0} onClick={()=>seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offvalue-20}&limit=20`)&setoffvalue(offvalue-20)} className='previous-button'>Previous</button>
                <button  disabled={offvalue===120} onClick={()=>seturl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offvalue+20}&limit=20`)&setoffvalue(offvalue+20)} className='next-button'>Next</button>
            </div>
        </>
    )
}