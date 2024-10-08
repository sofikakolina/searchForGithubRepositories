import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Pagination{
    total: number;
    page: number;
    size: number;
}

const initialState: Pagination={
    total: 0,
    page:0,
    size:10,
}

export const Pagination = createSlice({
    name: "pagination",
    initialState,
    reducers:{
        //reducer для добавления итогого количества найденных репозиториев в state
        addTotal:(state, action:PayloadAction<{total: number}>)=>{
            state.total = action.payload.total
        },
        //reducer для добавления страницы в state
        addPage:(state, action:PayloadAction<{page: number}>)=>{
            state.page = action.payload.page
        },
        //reducer для добавления количества репозиториев на страницу в state
        addSize:(state, action:PayloadAction<{size: number}>)=>{
            state.size = action.payload.size
        },
    }
})

export default Pagination.reducer;
export const { addTotal, addPage, addSize } = Pagination.actions