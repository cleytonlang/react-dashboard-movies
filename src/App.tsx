import "@tremor/react/dist/esm/tremor.css";
import { GlobalStyle } from "./styles/global";
import { Template } from "./componentes/Template";
import { MoviesStats } from "./componentes/MoviesStats";
import { MoviesCharts } from "./componentes/MoviesCharts";

function App() {
  return (
    <Template>
      <MoviesStats />
      <MoviesCharts />
      <GlobalStyle />
    </Template>
  );
}

export default App;
