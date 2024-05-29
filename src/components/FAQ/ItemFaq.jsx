const ItemFaq=({question})=>{
    return(<div className="relative">
        <div className="flex justify-center items-center ">
        <h1> {question}</h1>
        <div className="font-bold mx-2 text-[18px]">+</div>
        </div>
    </div>)
}
export default ItemFaq;