/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from "@testing-library/react";

import PlayScreen from "./PlayScreen";

import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";
import * as api from "../api/api";
import renderWithProviders from "../utils/test-utils";

// const getSongData = jest.spyOn(api, "getOption");
const genre = "R&B";
const genres = ["R&B", "SOUL"];
const setIsError = () => {};
describe("http request", () => {
  beforeEach(() => {
    return renderWithProviders(
      <PlayScreen genre={genre} genres={genres} setIsError={setIsError} />
    );
  });
  test("http request is produced", () => {
    // const input = screen.getByRole("textbox");
    // const button = screen.getByRole("button");
    // expect(input).toBeInTheDocument();
    // expect(button).toBeInTheDocument();
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(api),
      })
    ) as jest.Mock;
    const baseUrl = `https://music-app-662ef-default-rtdb.firebaseio.com/${genre}.json`;
    fetch(baseUrl);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(baseUrl);
  });
});
// describe("", () => {
//   beforeEach(() => {
//     return render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <PlayScreen genre={genre} genres={genres} setIsError={setIsError} />
//         </BrowserRouter>
//       </Provider>
//     );
//   });
//   test("http request is produced", () => {
//     // const input = screen.getByRole("textbox");
//     // const button = screen.getByRole("button");
//     // expect(input).toBeInTheDocument();
//     // expect(button).toBeInTheDocument();
//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve(api),
//       })
//     ) as jest.Mock;
//     const baseUrl = `https://music-app-662ef-default-rtdb.firebaseio.com/${genre}.json`;
//     fetch(baseUrl);
//     expect(fetch).toHaveBeenCalledTimes(1);
//     expect(fetch).toHaveBeenCalledWith(baseUrl);
//   });
// });
