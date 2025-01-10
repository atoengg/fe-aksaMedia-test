import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    username: string;
};

const getInitialState = (): UserState => {
    const savedUsername = localStorage.getItem("username");
    return {
        username: savedUsername || "Irham",
    };
};

export const userSlice = createSlice({
    name: "user",
    initialState: getInitialState(),
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            localStorage.setItem("username", action.payload); // Simpan ke LocalStorage
        },
        logout: (state) => {
            state.username = "";
            localStorage.removeItem("username"); // Hapus dari LocalStorage
        },
    },
});

export const { setUsername, logout } = userSlice.actions;
export default userSlice.reducer;
