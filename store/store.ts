import { configureStore } from "@reduxjs/toolkit";
import { PersonSlice } from "./features/personSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DetailSlice } from "./features/details";
export const store = configureStore({
    reducer:{
        details: DetailSlice.reducer,
        person: PersonSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector

// import { configureStore } from "@reduxjs/toolkit";
// import detailReducer from "./features/details";
// import personReducer from "./features/persons"; // Предполагается, что у вас есть этот редьюсер

// export const store = configureStore({
//     reducer: {
//         details: detailReducer,
//         person: personReducer, // Добавьте редьюсер для persons
//     }
// })

// export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
// export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
