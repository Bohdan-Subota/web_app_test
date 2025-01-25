import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Exercise {
  name: string;
  sets: number;
  reps: number;
  days: string[];
}

interface ExercisesState {
}

const initialState: ExercisesState = {
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
  },
});

export default exercisesSlice.reducer;
