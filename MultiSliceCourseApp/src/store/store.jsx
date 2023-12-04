//birden fazla slice konfigüre edeceğimiz icin configureStore import ettik
import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

export const store = configureStore({
  reducer: {
    //export edilen ve kullanılacak sliceları buraya yaziyoruz
    form: formReducer,
    courses: courseReducer,
  },
});
