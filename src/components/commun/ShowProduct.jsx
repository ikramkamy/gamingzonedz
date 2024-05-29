const ShowProduct=({name, description, tag, imgUrl,styleFlex})=>{
    return(
<div className={`flex justify-center items-center w-10/12 mb-20 ${styleFlex}`}>
                           
    <div className="flex flex-col w-1/4 ">
         <div className="text-[47px] mb-10">{name}</div>
         <div className="text-[15px] mb-10">{description}</div>
       
         <div className="text-[11px] mt-10">{tag}</div></div>
    <div>
       
</div>

<div className="w-1/2 flex justify-end">
        <img  src={imgUrl} alt="gaming zone product"/>
</div>

</div>)
}
export default ShowProduct;