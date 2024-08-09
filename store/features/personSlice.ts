import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person{
    id: number;
    name: string;
    language: string;
    numberOfForks: number;
    numberOfStars: number;
    dateOfUpdate: string; 
}

interface PersonState{
    persons: Person[];
}

const initialState: PersonState={
    persons: [],
}

export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers:{
        addPerson:(state, action:PayloadAction<{ id: number, name: string, language: string, numberOfForks: number, numberOfStars: number, dateOfUpdate: string }>)=>{
            state.persons.push({
                id: action.payload.id,
                name: action.payload.name,
                language: action.payload.language,
                numberOfForks: action.payload.numberOfForks,
                numberOfStars: action.payload.numberOfStars,
                dateOfUpdate: action.payload.dateOfUpdate,
            })
        }
    }
})

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions