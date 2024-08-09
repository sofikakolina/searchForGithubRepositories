import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Detail{
    id: number;
    name: string;
    language: string;
    numberOfForks: number;
    numberOfStars: number;
    dateOfUpdate: string; 
}

const initialState: Detail={
    id: 0,
    name:"",
    language: "",
    numberOfForks: 0,
    numberOfStars: 0,
    dateOfUpdate: "",
}

export const DetailSlice = createSlice({
    name: "detail",
    initialState,
    reducers:{
        addDetail:(state, action:PayloadAction<Detail>)=>{
            state.id = action.payload.id
            state.name = action.payload.name
            state.language = action.payload.language
            state.numberOfForks = action.payload.numberOfForks
            state.numberOfStars = action.payload.numberOfStars
            state.dateOfUpdate = action.payload.dateOfUpdate
        }
    }
})

export default DetailSlice.reducer;
export const { addDetail } = DetailSlice.actions