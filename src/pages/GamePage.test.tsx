import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { setScore } from "../store/userSlice";
import GamePage from "./GamePage";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

describe("action should be dispatched", () => {
  test("score action should be dispatched", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GamePage />
        </BrowserRouter>
      </Provider>
    );

    const scoreSpan = screen.getByTestId("score");
    expect(scoreSpan).toHaveTextContent("Your score: 0");

    store.dispatch(setScore(8));

    expect(await screen.findByTestId("score")).toHaveTextContent(
      "Your score: 8"
    );
  });
});
