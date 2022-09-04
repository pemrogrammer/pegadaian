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

export const fetchAllCustomerContract = async() => {
    // return state.akad;
    return await customAxios.get('v1/akad/all-customer-contract', {
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

export const fetchContractDueDate = async() => {
    // return state.akad;
    return await customAxios
        .get('v1/akad/contract-due-date')
        .then((responses) => {
            // return responses.data;
            return responses;
        })
        .catch((errors) => {
            console.log(errors);
        });
}

export const fetchKeelAuction = async() => {
    // return state.akad;
    return await customAxios
        .get('v1/akad/keel-auction')
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