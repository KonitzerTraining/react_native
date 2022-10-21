import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CustomerService} from "../services/CustomerService";
import * as RootNavigation from "../../../RootNavigation";

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

export const postCustomer = createAsyncThunk(
    'customer/postCustomer',
    async (customer: Omit<Customer, 'id'>, thunkAPI) => {
        console.log(thunkAPI);
        console.log('payload', customer);
        const newCustomer = await CustomerService.postOne(customer);
        //thunkAPI.dispatch(loadCustomers());
        return newCustomer;
    }
)

export const putCustomer = createAsyncThunk(
    'customer/putCustomer',
    async (customer: Customer, thunkAPI) => {
        console.log(thunkAPI);
        console.log('payload', customer);

        const newCustomer = await CustomerService.putOne(customer);

        thunkAPI.dispatch(loadCustomers());
        return newCustomer;
    }
)

export const deleteCustomer = createAsyncThunk(
    'customer/deleteCustomer',
    async (id: number, thunkAPI) => {
        thunkAPI.dispatch(loadCustomers());
        return CustomerService.deleteOne(id);
    }
)

// import * as RootNavigation from "../../../RootNavigation";
export const customerSlice = createSlice({
    name: 'customer',
    initialState, // Inhalt des Stores beim Aufruf des Stores
    reducers: {}, // Store Manipulation
    extraReducers: (builder) => {

        builder.addCase(loadCustomers.fulfilled, (state, action) => {
            state.customers = action.payload;
        })

        builder.addCase(postCustomer.fulfilled, (state, action) => {
            console.log(action.payload);
            state.customers.push(action.payload);
           // state.customers = action.payload;
        })

        builder.addCase(deleteCustomer.fulfilled, (state, action) => {
            RootNavigation.navigate('CustomerList');
            // state.customers = action.payload;
        })
    }
})

export const {
} = customerSlice.actions;
export default customerSlice.reducer

