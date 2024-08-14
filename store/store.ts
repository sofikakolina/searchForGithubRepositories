import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RepositorySlice } from "./features/repositorySlice";
import { Details } from "./features/details";
import { Pagination } from "./features/pagination";

export const store = configureStore({
    reducer:{
        details: Details.reducer,
        repository: RepositorySlice.reducer,
        pagination: Pagination.reducer,
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector