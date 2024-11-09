import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import profileReducer from './profileSlice';
import educationReducer from './educationSlice';
import projectReducer from './projectSlice';
import experienceReducer from './experienceSlice';
import extraDetailsReducer from './extraDetailsSlice';
import userReducer from './userSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  profileDetails: profileReducer,
  educationDetails: educationReducer,
  projectDetails: projectReducer,
  experienceDetails: experienceReducer,
  extraDetails: extraDetailsReducer,
  user: userReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],  // Ignore persist actions from serializability check
      },
    }),
});

export const persistor = persistStore(store);
