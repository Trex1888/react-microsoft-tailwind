import { BrowserRouter as Router, Route } from "react-router-dom";
import ChooseYourMs from "./components/ChooseYourMs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import GamePass from "./components/GamePass";
import Section3 from "./components/Section3";
import MSResponse from "./components/MSResponse";
import ThisHoliday from "./components/ThisHoliday";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Route path="/" exact>
          <Hero />
          <ChooseYourMs />
          <Section2 />
          <GamePass />
          <Section3 />
          <MSResponse />
          <ThisHoliday />
        </Route>
      </Router>
    </>
  );
}

export default App;
