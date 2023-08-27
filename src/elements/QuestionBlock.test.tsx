import { render, screen, waitFor } from "@testing-library/react";
import { Genre } from "../interfaces/interfaces";
import QuestionBlock from "./QuestionBlock";

import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";
import * as api from "../api/api";
const option: Genre = {
  audio: "..\\music\\DukeEllington _TakeTheATrain.mp3",
  genre: "Jazz",
  options: [
    {
      description:
        "Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th-century music",
      id: 1,
      is_correct: false,
      name: "Miles Davis – So What",
      video: "source",
    },
    {
      description:
        'Edward Kennedy "Duke" Ellington (April 29, 1899 – May 24, 1974) was an American jazz pianist, composer, and leader of his eponymous jazz orchestra from 1923 through the rest of his life.',
      id: 2,
      is_correct: true,
      name: "Duke Ellington - Take The A Train",
      video: "source",
    },
    {
      description:
        'Francis Albert Sinatra (/sɪˈnɑːtrə/; December 12, 1915 – May 14, 1998) was an American singer and actor. Nicknamed "Ol\' Blue Eyes", Sinatra was one of the most popular entertainers of the 1940s',
      id: 3,
      is_correct: false,
      name: "Frank Sinatra - Fly Me to the Moon",
      video: "source",
    },
    {
      description:
        "David Warren Brubeck (December 6, 1920 – December 5, 2012) was an American jazz pianist and composer. Often regarded as a foremost exponent of cool jazz, Brubeck's work is characterized by unusual time signatures",
      id: 4,
      is_correct: false,
      name: "Dave Brubeck - Take five",
      video: "source",
    },
  ],
};
const setIdChosen = () => {};
describe("http request", () => {
  const view = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <QuestionBlock option={option} setIdChosen={setIdChosen} />
        </BrowserRouter>
      </Provider>
    );
  };

  test("four song options are displayed", () => {
    view();

    const option = screen.getAllByTestId("songoption");

    expect(option).toHaveLength(4);
    // expect(fetch).toHaveBeenCalledWith(baseUrl);
  });
});
