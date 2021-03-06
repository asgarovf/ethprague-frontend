import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import starknetSlice from "store/slicers/starknet";
import swapSlice from "store/slicers/swap";
import themeSlice from "store/slicers/theme";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    starknet: starknetSlice,
    swap: swapSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const customizedMiddleware = getDefaultMiddleware({
      serializableCheck: false,
    });
    return customizedMiddleware;
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
