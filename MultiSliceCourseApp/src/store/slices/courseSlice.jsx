import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid spesifik id değeri üretmeye yarar
const courseSlice = createSlice({
  name: "form",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCourse(state, action) {
      const updatedCourses = state.data.filter((item) => {
        return item.id !== action.payload;
      });
      state.data = updatedCourses; //silindikten sonra güncel array bu olcak
    },
  },
});

export const { addCourse, removeCourse } = courseSlice.actions;

export const courseReducer = courseSlice.reducer;
