import "./App.scss";
import MultiStepForm from "./components/multi-step-form/MultiStepForm";
import PassGen from "./components/password-generator/PassGen";
import CardsLaptop from "./components/card-laptop/CardsLaptop";
import TipCalc from "./components/tip-calculator/TipCalc";
import { Route, Link } from "react-router-dom";
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
      </ul>
      <div>
        <Route path="/cardslaptop" component={CardsLaptop} />
        <Route path="/tipcalc" component={TipCalc} />
        <Route path="/passgen" component={PassGen} />
        <Route path="/multistep" component={MultiStepForm} />
      </div>
    </div>
  );
}

export default App;
