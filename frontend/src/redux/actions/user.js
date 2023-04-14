import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "counter",
	initialState: {
		value: {
			email: "",
			password: "",
		},
	},
	reducers: {
		update: (state, action) => {
			return {
				...state,
				value: action.payload,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const {update} = userSlice.actions;

export default userSlice.reducer;
