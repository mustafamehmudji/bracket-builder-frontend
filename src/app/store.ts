import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { createLogger } from "redux-logger";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import authSlice, { AuthState } from "./features/authSlice";

// Create middlewares based on development/production conditions
let middlewares: Array<Middleware> = [];
if (process.env.NODE_ENV === `development`) {
  const logger = createLogger({
    duration: true,
    diff: false,
    collapsed: true,
  });
  middlewares.push(logger);
}

// Persist the required states
const transforms = [
  encryptTransform({
    secretKey: "d20ac630-ba07-11eb-8529-0242ac930003",
    onError: function (error: Error) {
      // Handle the error.
      console.error("Transform error", error);
    },
  }),
];

const reducer = combineReducers({
  auth: persistReducer<AuthState>(
    { key: "auth", storage: sessionStorage, transforms },
    authSlice
  ),
});

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export const persistor = persistStore(store);

// For typescript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
