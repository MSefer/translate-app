import { createSlice } from '@reduxjs/toolkit'

export const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    text: "",
    translatedText: "",
    status: false,
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload
    },
    setTranslatedStatus: (state, action) => {
      state.status = action.payload
    },
  },
})

export const { setText, setTranslatedText, setTranslatedStatus } = controlsSlice.actions;

export default controlsSlice.reducer;