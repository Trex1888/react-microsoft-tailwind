import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import GamePass from "./components/GamePass";
import Section3 from "./components/Section3";
import Response from "./components/Response";
import Holiday from "./components/Holiday";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Route path="/" exact>
          <Hero />
          <Section1 />
          <Section2 />
          <GamePass />
          <Section3 />
          <Response />
          <Holiday />
        </Route>

        <Social />
        <Footer />
      </Router>
    </>
  );
}

export default App;
