/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WelcomeForm from "./WelcomeForm";

import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";

describe("input and button are in the component", () => {
  beforeEach(() => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <WelcomeForm />
        </BrowserRouter>
      </Provider>
    );
  });
  test("input and button are in the component", () => {
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe("button is not disabled after entering data", () => {
  beforeEach(() => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <WelcomeForm />
        </BrowserRouter>
      </Provider>
    );
  });
  test("button is disabled after component is rendered", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
  test("button is not disabled after data is rendered", () => {
    const button = screen.getByRole("button");
    userEvent.type(
      screen.getByPlaceholderText(/Type your name here.../i),
      "ali"
    );
    expect(button).not.toBeDisabled();
  });
});
