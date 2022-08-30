import { configureStore } from "@reduxjs/toolkit";
import akad from "./akad";
import datatable from "./datatable";

export default configureStore({
  reducer: {
    akad: akad,
    datatable: datatable,
  },
});
