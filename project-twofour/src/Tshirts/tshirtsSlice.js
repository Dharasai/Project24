
import { createSlice } from "@reduxjs/toolkit"

const tshirtsSlice = createSlice({

name:"tshirt",
initialState:{
    value: [
        {
            id:1,
            name: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option2-764A4983-640x354.jpg"
        },
        {
            id:2,
            name: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Aventador/6721/Lamborghini-Aventador-SVJ/1621849426405/front-left-side-47.jpg"
        },
    ]
},
reducers: {
      addCard: (state, action) =>{
          state.value.push(action.payload)
      },
      removeCard: (state, action)=>{
          state.value =action.payload
      }
}
})
 export const { addCard, removeCard} = tshirtsSlice.actions

export default tshirtsSlice.reducer