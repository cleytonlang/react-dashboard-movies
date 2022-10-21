import "@tremor/react/dist/esm/tremor.css";
import { GlobalStyle } from "./styles/global";
import { Template } from "./componentes/Template";
import { MoviesStats } from "./componentes/MoviesStats";
import { MoviesCharts } from "./componentes/MoviesCharts";
import { createContext } from "react";
const UserContext = createContext({});

function getGenres() {
  return 100;
}

function App() {
  return (
    <Template>
      <UserContext.Provider value={getGenres}>
        <MoviesStats />
        <MoviesCharts />
        <GlobalStyle />
      </UserContext.Provider>
    </Template>
  );
}

export default App;
