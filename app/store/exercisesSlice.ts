import { createSlice } from "@reduxjs/toolkit";

interface ExercisesState {
  id:string
}

const initialState: ExercisesState = {
  id:"01"
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
  },
});

export default exercisesSlice.reducer;
