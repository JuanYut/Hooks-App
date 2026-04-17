import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { PokemonPage } from "./03-example/PokemonPage";
// import HooksApp from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      {/* <TrafficLight /> */}
      {/* <TrafficLightWithEffect /> */}
      {/* <TrafficLightWithHook /> */}
      <PokemonPage />
    </div>
  </StrictMode>,
);
