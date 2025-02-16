import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "./store";

type DispatchFunction = () => AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
