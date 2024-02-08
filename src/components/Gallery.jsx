import GalleryList from './GalleryList';
export default function Gallery({image,title}){
    return(
        <div className='box2'>
        <h4>{title}</h4>
        <img src={image} alt="" />
        </div>
    )
}
