import "./App.scss";
import CardsLaptop from "./components/card-laptop/CardsLaptop";
import TipCalc from "./components/tip-calculator/TipCalc";
function App() {
  return (
    <>
      <div>
        <p className="helloworld">hello world</p>
        <CardsLaptop />
        <TipCalc />
      </div>
    </>
  );
}

export default App;
