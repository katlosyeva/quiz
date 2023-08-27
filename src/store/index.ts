import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// interface User {
//   name: string;
//   score: number;
// }
// const storageName = sessionStorage.getItem("name");
// const storageScore = Number(sessionStorage.getItem("score"));
// const initialState: User = {
//   name: storageName ? storageName : "",
//   score: storageScore ? storageScore : 0,
// };

// const userSlice = createSlice({
//   name: "name",
//   initialState,
//   reducers: {
//     setName(state, action: PayloadAction<string>) {
//       state.name = action.payload;
//     },
//     setScore(state, action: PayloadAction<number>) {
//       state.score = action.payload;
//     },
//   },
// });

// export userSlice.reducer;
// export const { setName, setScore } = userSlice.actions;

const store = configureStore({ reducer: userReducer });
export const userScore = (state: RootState) => state.score;
export const userName = (state: RootState) => state.name;
export type RootState = ReturnType<typeof store.getState>;

export default store;
