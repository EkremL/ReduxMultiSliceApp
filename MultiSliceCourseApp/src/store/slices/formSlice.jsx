import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
      // console.log(state.cost);
    },
  },
  //submit olduğunda resetlemek için extra reducers açmak gerek
  extraReducers(builder) {
    //addCourse tetiklendikten sonra stateyi güncelliyoruz
    builder.addCase(addCourse, (state) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});
export const { changeName, changeDescription, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
