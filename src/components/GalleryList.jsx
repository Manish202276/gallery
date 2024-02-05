import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from './Gallery';
export default function Gallerylist()
{   
    const [Galleryimage,setGalleryimage]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    const [offset,setoffset]=useState(0);

    async function download_gallery(){
        
        const response=await axios.get('https://api.slingacademy.com/v1/sample-data/photos?limit=20&offset='+offset);
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

    const next=()=>{
        if(offset>132){
        alert("next photos...");
        }
        else{
        setoffset(offset+20);
        }
        // console.log(offset);
        
    }
    const prev=()=>{
        if(offset<0){
        alert("prev photos...");
        }
        else{
        setoffset(offset-20);
        }
        // console.log(offset);
    }

    useEffect(()=>{download_gallery()})
    return(
        <>
            <div className="box">
                {(isLoading)?'Loading....':
                Galleryimage.map((p)=><Gallery image={p.photos} />)
                }      
            </div>
            <div>
                <button onClick={prev}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </>
    )
}
