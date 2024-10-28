import {createSlice } from '@reduxjs/toolkit'

const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    togglePrivacy: (state, action) => !state
  }
});

export const privacyAction = privacySlice.actions
export default privacySlice
