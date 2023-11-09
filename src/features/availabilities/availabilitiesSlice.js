import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weakAvailabilitiesData: [],
  testSlice: false,
};

const availabilitiesSlice = createSlice({
  name: "availabilities",
  initialState,
  reducers: {
    setAllWeakAvailabilitiesData: (state, action) => {
      state.weakAvailabilitiesData = action.payload;
    },
    setTokensss: (state, action) => {
      state.testSlice = true;
    },
  },
});

export const { setAllWeakAvailabilitiesData, setTokensss } =
  availabilitiesSlice.actions;

export default availabilitiesSlice.reducer;
