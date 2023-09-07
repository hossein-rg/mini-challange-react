import "./App.scss";
import MultiStepForm from "./components/multi-step-form/MultiStepForm";
import PassGen from "./components/password-generator/PassGen";
import CardsLaptop from "./components/card-laptop/CardsLaptop";
import TipCalc from "./components/tip-calculator/TipCalc";
import { Route, Link, Routes } from "react-router-dom";
import GuessMyNumber from "./components/guessMyNumber/GuessMyNumber";
function App() {
  return (
    <div>
      <p className="helloworld">hello world</p>
      <ul>
        <li>
          <Link to="/cardslaptop">Cards laptop</Link>
        </li>
        <li>
          <Link to="/tipcalc">Tip Calculator</Link>
        </li>
        <li>
          <Link to="/passgen">Password Generator</Link>
        </li>
        <li>
          <Link to="/multistep">multi step forms</Link>
        </li>
        <li>
          <Link to="/guessmynumber">guess my number</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path="/cardslaptop" element={<CardsLaptop />} />
          <Route path="/tipcalc" element={<TipCalc />} />
          <Route path="/passgen" element={<PassGen />} />
          <Route path="/multistep" element={<MultiStepForm />} />
          <Route path="/guessmynumber" element={<GuessMyNumber />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
