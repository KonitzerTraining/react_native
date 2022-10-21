import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomerService} from "../services/CustomerService";

export interface CustomerState {
    customers: Customer[]
}

const initialState: CustomerState = {
    customers: [
        {
            id: 999,
            name: 'Testname',
            credit: 200
        }
    ]
}

export const loadCustomers = createAsyncThunk(
    'customer/loadCustomers',
    CustomerService.getAll
)

export const customerSlice = createSlice({
    name: 'customer',
    initialState, // Inhalt des Stores beim Aufruf des Stores
    reducers: {
        /* loadCustomers: (state) => {
             console.log('load Customers');

            })
        },*/
        deleteOneCustomer: (state, action) => {
            console.log(action);
        }
    }, // Store Manipulation
    extraReducers: (builder) => {

        builder.addCase(loadCustomers.fulfilled, (state, action) => {
            state.customers = action.payload;
        })
    }
})

export const {
} = customerSlice.actions;
export default customerSlice.reducer

