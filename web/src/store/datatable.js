import { createSlice } from "@reduxjs/toolkit";

const datatable = createSlice({
  name: "datatable",
  initialState: {
    // table yang muncul
    tableData: {},
    // table data awal di insert
    tableDataDefault: {},
    // table proses filter di search
    tableDataFilter: {},
    coba: [1],
  },
  reducers: {
    insertData(state, action) {
      state.tableData = {
        ...state.tableData,
        [action.payload.nameTable]: action.payload.data,
      };
      state.tableDataDefault = {
        ...state.tableDataDefault,
        [action.payload.nameTable]: action.payload.data,
      };
      state.tableDataFilter = {
        ...state.tableDataFilter,
        [action.payload.nameTable]: action.payload.data,
      };
    },
    filterData(state, action) {
      let nameTable = action.payload.nameTable;
      let searchText = action.payload.searchText;
      let keyColumns = action.payload.keyColumns;
      let defaultData = state.tableDataDefault[nameTable];

      if (searchText !== "") {
        defaultData = state.tableDataFilter[nameTable].filter((item) => {
          return keyColumns.some((key) => item[key]?.toLowerCase().includes(searchText.toLowerCase()));
        });

        state.tableData[nameTable] = defaultData;
      } else {
        state.tableData[nameTable] = state.tableDataDefault[nameTable];
      }
    },
  },
  extraReducers: {},
});

export const { insertData, filterData } = datatable.actions;
export const getCoba = (state) => {
  let result = state.datatable.coba;
  result = [...result, 2];

  return result;
};

export default datatable.reducer;
