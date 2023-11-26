import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface mainConfigState {
    theme: 'light' | 'dark'
}

const initialState = {
    theme: 'light'
} as mainConfigState;

export const mainConfigSlice = createSlice({
    name:'mainConfig',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.theme = action.payload
        }
    }
})


export const { setTheme } = mainConfigSlice.actions;


export default mainConfigSlice.reducer;
