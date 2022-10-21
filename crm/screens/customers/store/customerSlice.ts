import {createSlice} from "@reduxjs/toolkit";

export interface CustomerState {
    customers: Customer[]
}

const initialState: CustomerState = {
    customers: []
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState, // Inhalt des Stores beim Aufruf des Stores
    reducers: {} // Store Manipulation
})

export default customerSlice.reducer

