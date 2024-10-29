import { createSlice } from '@reduxjs/toolkit';
export const ThemeChanger = createSlice({
    name: 'theme',
    initialState: {
        value: "light"
    },
    reducers: {
        toLight: (state) => {
            state.value = "light"
        },
        toDark: (state) => {
            state.value = "dark"
        },
    },
})

export const { toLight, toDark } = ThemeChanger.actions;

export default ThemeChanger.reducer;