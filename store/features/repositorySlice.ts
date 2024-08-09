import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Repository{
    id: number;
    name: string;
    language: string;
    numberOfForks: number;
    numberOfStars: number;
    dateOfUpdate: string; 
}

interface RepositoryState{
    repositories: Repository[];
}

const initialState: RepositoryState={
    repositories: [],
}

export const RepositorySlice = createSlice({
    name: "repository",
    initialState,
    reducers:{
        addRepository:(state, action:PayloadAction<Repository>)=>{
            state.repositories.push({
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

export default RepositorySlice.reducer;
export const { addRepository } = RepositorySlice.actions