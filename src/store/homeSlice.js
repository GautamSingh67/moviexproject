import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:"home",
    initialState:{
        url  : {},
        generas : {},
    },
    reducers : {
        getApiConfiguration:(state,action)=>{
            state.url = action.payload;
        },
        getGeneras:(state,action)=>{
            state.generas = action.payload;
        },
    },
});

export const {getApiConfiguration,getGeneras} = homeSlice.actions;
export default homeSlice.reducer;