import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Gallery()
{   
    const [Galleryimage,setGalleryimage]=useState();
    const [isLoading,setisLoading]=useState('');
    async function download_gallery(){
        const response=await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
        const responsedata=response.data;
        const responsedataimg=responsedata.photos;
        console.log(responsedataimg)
        const img=responsedataimg.map((imgurl)=>axios.get(imgurl.url));
        const imgdata=await axios.all(img);
        console.log(imgdata)
        const res=imgdata.map((galldata)=>
        {
        return{
            photo:galldata
        }
    }
    )   
    setGalleryimage(res);
    setisLoading(false);
    }
    useEffect(()=>{download_gallery()},[])

    return(
        <>
            <div>
            {(isLoading)?'Loading....':
            Galleryimage.map((p)=><Gallery image={p.image}  />)
    }      
            </div>
        </>
    )
}