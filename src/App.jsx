import "./App.scss";
import MultiStepForm from "./components/multi-step-form/MultiStepForm";
import PassGen from "./components/password-generator/PassGen";
import CardsLaptop from "./components/card-laptop/CardsLaptop";
import TipCalc from "./components/tip-calculator/TipCalc";
import { Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <p className="helloworld">hello world</p>
        <CardsLaptop />
        <TipCalc />
        <PassGen />
        <MultiStepForm />
      </div>
    </>
  );
}

export default App;
