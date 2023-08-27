import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/Layout";
import WelcomePage from "./pages/WelcomePage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import { Provider } from "react-redux";
import store from "./store/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Route>
  )
);
// export interface iPlayerContext {
//   name: string;
//   setName: React.Dispatch<React.SetStateAction<string>>;
//   score: number;
//   setScore: React.Dispatch<React.SetStateAction<number>>;
// }

// export const PlayerContext = createContext<iPlayerContext>({
//   name: "",
//   setName: () => {},
//   score: 0,
//   setScore: () => {},
// });
function App() {
  // const [name, setName] = useState("");
  // const [score, setScore] = useState(0);
  return (
    <Provider store={store}>
      {/* // <PlayerContext.Provider value={{ name, setName, score, setScore }}> */}
      <RouterProvider router={router} />
      {/* // </PlayerContext.Provider> */}
    </Provider>
  );
}

export default App;
