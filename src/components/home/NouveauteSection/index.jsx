
import image from '../../../assets/home/section1/nouveaute/mhw100_960x960.png' 
import image2 from '../../../assets/home/section1/nouveaute/Groupe 1228.png'
import { UseProductsStore } from '../../stores/ProductsStore';
const NouveauteSection=()=>{
    const {NewProducts}=UseProductsStore((state)=>state)
    console.log('new', NewProducts)
    return(<div className="flex flex-col justify-center items-center">


       <h1 className="uppercase text-[67px] font-semibold">nouveauté</h1>  
       <div id="#subtitleOne" className="flex justify-center items-center">
                <div id="#stylingVerticalSlach" className="w-1 h-4 bg-btnCarouselHover mr-2"></div>
                <h1 className="text-[21px] uppercase">the epic gaming store</h1>
             
                </div>


                <div id='#carouselNouveaute  ' className=' w-full flex'>
                    <div id="#carouselitem"  
                     className='bg-carousItemNouveaute  flex flex-col 
                     h-[100vh]
                     w-2/12
                    bg-no-repeat bg-100% '>
                    <img src={image} alt="gaming zone "/>
                    <h2>{NewProducts[0].name}</h2>
                    <h2>{NewProducts[0].typeProduct}</h2>
                    <h2>{NewProducts[0].descreption}</h2>
                  <img src=""/>

                    <div className='absolute z-10 left-[17px] top-[4px] bg-newLabel bg-no-repeat w-[30%] h-[20%] text-center'> new</div>
                </div>
                </div>
    </div>)
}
export default NouveauteSection;