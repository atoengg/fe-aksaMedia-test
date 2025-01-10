import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
    id: number;
    namaLengkap: string;
    jenisKelamin: string;
    alamat: string;
    status: string;
};

const getInitialState = (): User[] => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
};

export const userCrudSlice = createSlice({
    name: "userCrud",
    initialState: getInitialState(),
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
            localStorage.setItem("users", JSON.stringify(state));
        },
        editUser: (state, action: PayloadAction<User>) => {
            const index = state.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
                localStorage.setItem("users", JSON.stringify(state));
            }
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            const updatedState = state.filter((user) => user.id !== action.payload);
            localStorage.setItem("users", JSON.stringify(updatedState));
            return updatedState;
        },
    },
});

export const { addUser, editUser, deleteUser } = userCrudSlice.actions;
export default userCrudSlice.reducer;
