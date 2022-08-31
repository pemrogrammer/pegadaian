import { createSlice } from "@reduxjs/toolkit";
import customAxios from "../axios";

const akad = createSlice({
    name: "akad",
    initialState: {
        allData: [],
        oneMonthLastData: [],
        twoMonthLastData: [],
        threeMonthLastData: [],
        dailyMonthLastData: [],
        sevenDayMonthLastData: [],
        fifteenDayLastData: [],
    },
    reducers: {
        insertAllData(state, action) {
            state.allData = action.payload.allData;
        }
    },
});

export const fetchAkad = async() => {
    // return state.akad;
    return await customAxios.get('api/v1/akad', {
            // params: {
            //     ID: 12345
            // }
        })
        .then((responses) => {
            // return responses.data;
            return responses;
        })
        .catch((errors) => {
            console.log(errors);
        });


}

export const { insertAllData } = akad.actions;
export default akad.reducer;