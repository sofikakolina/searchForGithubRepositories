import { configureStore } from "@reduxjs/toolkit";
import { RepositorySlice } from "./features/repositorySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DetailSlice } from "./features/details";
export const store = configureStore({
    reducer:{
        details: DetailSlice.reducer,
        repository: RepositorySlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector