import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { noteApi } from "@/features/notes/redux/noteApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { noteReducer } from "@/features/notes/redux/noteSlice";

const store = configureStore({
  reducer: {
    [noteApi.reducerPath]: noteApi.reducer,
    note: noteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(noteApi.middleware),
});

setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;