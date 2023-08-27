import { render, screen, waitFor } from "@testing-library/react";

import Audioplayer from "./Audioplayer";

import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

const audio = "..\\music\\DukeEllington _TakeTheATrain.mp3";
describe("UI", () => {
  const view = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Audioplayer audio={audio} />
        </BrowserRouter>
      </Provider>
    );
  };

  test("play/pause button is displayed", () => {
    view();

    const button = screen.getByRole("button", { name: /button play pause/i });
    expect(button).toBeInTheDocument();

    expect(() => screen.getByTestId("pause") as HTMLImageElement).toThrow();
    expect(screen.getByTestId("play")).toBeInTheDocument();
  });
  test("starting time is displayed right", () => {
    view();

    expect(screen.getByTestId("current time")).toHaveTextContent(`00:00`);
  });
});
