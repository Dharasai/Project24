


import {createSlice} from '@reduxjs/toolkit'
import { ShirtsData } from './shirtsdata';

const shirtsSlice = createSlice({
    name: "shirt",
    initialState: { value: ShirtsData},
    reducers: {
        addImg: (state, action) =>{
            state.value =action.payload
        }
    }
});

export  const {addImg} = shirtsSlice.actions

export default shirtsSlice.reducer