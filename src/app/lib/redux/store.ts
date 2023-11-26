import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer, reducers } from "./rootReducers";
import { middlewares } from "./middlewares";
import persistStore from "redux-persist/es/persistStore";
import { REGISTER, PERSIST } from "redux-persist";


const store = configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    REGISTER,
                    PERSIST
                ]
            }
        }).prepend(middlewares);
    },
})

const persistor = persistStore(store);

export { store, persistor }

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;