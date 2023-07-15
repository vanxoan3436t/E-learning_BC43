import { createSlice } from '@reduxjs/toolkit'

export interface IsLoading {
    isLoading : boolean
}

const initialState = {
isLoading : false
}

const isLoadingReducer = createSlice({
  name: 'isLoadingReducer',
  initialState,
  reducers: {},
  
});

export const {} = isLoadingReducer.actions

export default isLoadingReducer.reducer