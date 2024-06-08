import {create} from 'zustand'
import axios from 'axios'

export const useFiltersStor=create((set,get)=>({
cathegories: [
    {category:"Processor",
     codeCategory:1,
     FilterIsActive:false,
     filtersList:[
     {filterName:'brands', filtersItems:['all','AMD', 'intel']},
     {filterName:'model', filtersItems:['AMD Ryzen 3','AMD Ryzen 5','AMD Ryzen 5 Pro','AMD Ryzen 7','Core i3']},
     {filterName:'support', filtersItems:['AMD sTR5','AMD sWRX8','Intel 1200','Intel 1700']},
     {filterName:'platfom',filtersItems:['AMD Zen 2','AMD Zen 3','AMD Zen 4','Intel Alder Lake-S']}
    ]
    
    },
    
    {category: "Mother board",
    codeCategory:2,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['ASRock', 'ASUS','Gigabyte','MSI']},
      {filterName:'support', filtersItems:['AMD Ryzen 3','AMD AM5','AMD sTR5','AMD sWRX8','Intel 1200','Intel 1700','Intel LGA4677']},
      {filterName:'format', filtersItems:['ATX','E-ATX','Micro ATX','Mini ITX','Specific','SSI CEB','SSI EEB']},
      {filterName:'chipset',filtersItems:['AMD A520','AMD A620','AMD B450','AMD B550','AMD B650','AMD B650E','AMD TRX50','AMD WRX80','AMD WRX90','AMD X670','AMD X670E','Intel B660 Express','Intel B760 Express']},
      {filterName:'memorytype', filtersItems:['DDR4','DDR4 ECC','DDR5','DDR5 ECC']},
    
    ]
    },
    {category: "RAM",
    codeCategory:3,
    FilterIsActive:true,
    filtersList:[
      {filterName:'brands', filtersItems:['Corsair', 'Crucial','Fox Spirit','G.Skill','Kingston','Lenovo','Micron','Textorm','LEXAR']},
      {filterName:'MEMORY FREQUENCY', filtersItems:['DDR2 800 MHz','DDR3 1066 MHz','DDR3 1333 MHz','DDR3 1600 MHz','DDR3 1866 MHz','DDR3 2133 MHz','DDR5 5600 MHz']},
      {filterName:'format', filtersItems:['DIMM 240-pin (DDR2)','DIMM 240-pin (DDR3)','DIMM 288 pins (DDR5)']},
      {filterName:'capacity',filtersItems:[2,4,8,16,32,64,256]},
      {filterName:'type', filtersItems:['DDR2','DDR3','DDR3L (1.35V)','DDR5']},
    
    ]
    },
    {category: "CPU COOLERS",
    codeCategory:4,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['Antec', 'Arctic','ASUS','Barrow','BARROWCH','be quiet !','BitFenix','Cooler Master Ltd','Corsair']},
      {filterName:'UNIT_TYPE', filtersItems:['1/4 plug','6.4mm connector','Backplane','Bending kit','Liquid']},
      {filterName:'PROCESSOR_SUPPORT', filtersItems:['AMD AM2','AMD AM2+','AMD AM3 ','AMD AM3+']},
      {filterName:'MATERIAL',filtersItems:['Acrylic','Aluminum','Brass','Chromium','Copper','Copper/Aluminu']},
      {filterName:'KIT', filtersItems:['yes','no']},
    
    ]
    },
    {category: "Graphics Processing Unit",
    codeCategory:5,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['ASRock', 'ASUS','Gainward','Gigabyte','MSI','PNY']},
      {filterName:'GPU_brand', filtersItems:['AMD','NVIDIA']},
      {filterName:'Graphics_chipset', filtersItems:['AMD Radeon RX 550','AMD Radeon RX 6400','AMD Radeon RX 6500 XT','AMD Radeon RX 6600']},
      {filterName:'Video_memory_size',filtersItems:[2,4,6,8,12,16,20,24]},
      {filterName:'Cooling_type', filtersItems:['Active (fansink)','Passive (fanless)','Water cooling']},
    
    ]
    },
    {category: "Storage",
    codeCategory:6,
    FilterIsActive:false,
    filtersList:[
      {filterName:'brands', filtersItems:['Corsair', 'Crucial','Fox Spirit','Intel','KIOXIA','Kingston']},
      {filterName:'Hard_drive_format', filtersItems:['2" 1/2','M.2','mSATA']},
      {filterName:'capacity',filtersItems:[120,240,250,256,480,500,512,960]},

    
    ]
    
    },
    {category: "Power supply",
    codeCategory:7,
    FilterIsActive:false,
    },
    {category: "Case",
    codeCategory:8,
    FilterIsActive:false,
    }, 
    {category: "Case Cooler",
    codeCategory:9,
    FilterIsActive:false,  
    },
    {category: "Extras",
    codeCategory:10,
    FilterIsActive:false,
    },

],
Filters:[{
FiltersList:[
  {brands:['all','AMD', 'intel']},
  {model:['AMD Ryzen 3','AMD Ryzen 5','AMD Ryzen 5 Pro','AMD Ryzen 7']},
  {support:['AMD sTR5','AMD sWRX8','Intel 1200','Intel 1700']},
  {platfom:['AMD Zen 2','AMD Zen 3','AMD Zen 4','Intel Alder Lake-S']},
  {frequency:true},
]}

],
ProductsList:[],





getProducts: async ()=>{
    //console.log("we are in the get banner function")
    try{
let response = await axios.get('/product_pages.json',
    {
      headers: {
        Authorization:
          "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
      },
    }
  )
 // console.log('data', response.data)
  set ({ProductsList: response.data})
    } catch (err) {
console.error(err)
    }

},

SetFilterIsActive: async (category,isActive)=>{
  //cathegories.indexOf(category).FilterIsActive: (!cathegories.indexOf(category).FilterIsActive)
      //set ({cathegories : })
  
  
  set ({ cathegories:category})
  console.log('we are setting new value for is active',category)
  },





}))