import {create} from 'zustand'
import axios from 'axios'
export const useFiltersStor=create((set,get)=>({
cathegories: [
    {category:"Processor",
     codeCategory:1,
     FilterIsActive:false,
    },
    {category: "Mother board",
    codeCategory:2,
    FilterIsActive:false,
    },
    {category: "RAM",
    codeCategory:3,
    FilterIsActive:false,
    },
    {category: "CPU COOLERS",
    codeCategory:4,
    FilterIsActive:false,
    },
    {category: "Graphics Processing Unit",
    codeCategory:5,
    FilterIsActive:false,
    },
    {category: "Storage",
    codeCategory:6,
    FilterIsActive:false,
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

}],
ProductsList:[],
SetFilterIsActive: async (category,isActive)=>{
    //if(cathegories)
    //set ({cathegories : })

},
getProducts: async ()=>{
    console.log("we are in the get banner function")
    try{
let response = await axios.get('/product_pages.json',
    {
      headers: {
        Authorization:
          "pkrz3obauvMROPUqPm23X1qo6pFVQkjeK34WzNMbavyTToosZhorSTpJ",
      },
    }
  )
  console.log('data', response.data)
  set ({ProductsList: response.data})
    } catch (err) {
console.error(err)
    }

}

}))