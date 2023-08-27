import userReducer, { setName, setScore } from "./userSlice";

describe("user reducer", () => {
  test("should return the initial state when passed an empty action", () => {
    const state = undefined;
    const action = { type: "" };
    const result = userReducer(state, action);
    expect(result).toEqual({ name: "", score: 0 });
  });
  test("should write name to the state", () => {
    const initialState = undefined;
    const action = setName("Lucy");
    const result = userReducer(initialState, action);
    expect(result).toEqual({ name: "Lucy", score: 0 });
  });
  test("should write score to state", () => {
    const initialState = undefined;
    const action = setScore(2);
    const result = userReducer(initialState, action);
    expect(result).toEqual({ name: "", score: 2 });
  });
  test("should add score to state", () => {
    const initialState = undefined;
    let action = setScore(2);
    let result = userReducer(initialState, action);
    action = setScore(3);
    result = userReducer(result, action);

    expect(result).toEqual({ name: "", score: 3 });
  });
});
