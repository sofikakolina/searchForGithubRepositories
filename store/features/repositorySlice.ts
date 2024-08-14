import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Repository{
    id: number;
    name: string;
    language: string;
    numberOfForks: number;
    numberOfStars: number;
    dateOfUpdate: string; 
    topics: Array<string>; 
    license: any;
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
                topics: action.payload.topics,
                license: action.payload.license,
            })
        },
        deleteRepositories:(state)=>{
            state.repositories = []
        },
        sortRepositories:(state, action:PayloadAction<{ sortDown: boolean }>)=>{
            var sortDown = action.payload.sortDown
            state.repositories.sort(function (a, b) {
                if (a.name > b.name) {
                  return sortDown ? 1 : -1;
                }
                if (a.name < b.name) {
                  return sortDown ? -1 : 1;
                }
                return 0;
              });
        },
    }
})

export default RepositorySlice.reducer;
export const { addRepository, deleteRepositories, sortRepositories } = RepositorySlice.actions