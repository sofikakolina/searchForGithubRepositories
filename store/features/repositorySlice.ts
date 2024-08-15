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
        sortRepositories: (state, action: PayloadAction<{ sortDown: boolean, column: keyof Repository }>) => {
            const { sortDown, column } = action.payload;
        
            state.repositories.sort((a, b) => {
                let aValue = a[column];
                let bValue = b[column];
                if (column === 'dateOfUpdate') {
                    const parseDate = (dateString: string) => {
                        const [day, month, year] = dateString.split('.').map(Number);
                        return new Date(year, month - 1, day).getTime();
                    };
                    aValue = parseDate(a.dateOfUpdate);
                    bValue = parseDate(b.dateOfUpdate);
                }
                if (aValue > bValue) {
                    return sortDown ? 1 : -1;
                }
                if (aValue < bValue) {
                    return sortDown ? -1 : 1;
                }
                return 0;
            });
        },
    }
})

export default RepositorySlice.reducer;
export const { addRepository, deleteRepositories, sortRepositories } = RepositorySlice.actions