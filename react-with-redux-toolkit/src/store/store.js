import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../store/counter'
import privacySlice from '../store/privacy'

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
  }
});

export default counterStore;
                    