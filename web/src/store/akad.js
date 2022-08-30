import { createSlice } from "@reduxjs/toolkit";

const akad = createSlice({
  name: "akad",
  initialState: {
    allData: [
      {
        id: 1,
        name: "all data",
        no_telp: "083434",
      },
    ],
    oneMonthLastData: [],
    twoMonthLastData: [],
    threeMonthLastData: [],
    dailyMonthLastData: [],
    sevenDayMonthLastData: [],
    fifteenDayLastData: [],
  },
  reducers: {},
});

// export const { changeData } = akad.actions;
export default akad.reducer;
