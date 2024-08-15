import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Detail{
    id: number;
    name: string;
    language: string;
    numberOfForks: number;
    numberOfStars: number;
    dateOfUpdate: string; 
    topics: Array<string>; 
    license: string
}

const initialState: Detail={
    id: 0,
    name:"",
    language: "",
    numberOfForks: 0,
    numberOfStars: 0,
    dateOfUpdate: "",
    topics: [],
    license: ""
}

export const Details = createSlice({
    name: "details",
    initialState,
    reducers:{
        //reducer для добавления деалей о репозитории в state
        addDetail:(state, action:PayloadAction<Detail>)=>{
            state.id = action.payload.id
            state.name = action.payload.name
            state.language = action.payload.language
            state.numberOfForks = action.payload.numberOfForks
            state.numberOfStars = action.payload.numberOfStars
            state.dateOfUpdate = action.payload.dateOfUpdate
            state.topics = action.payload.topics
            state.license = action.payload.license
        }
    }
})

export default Details.reducer;
export const { addDetail } = Details.actions