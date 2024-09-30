import React from "react";
import { FlexContainerColumn } from "./components/0_wrappers/FlexContainerColumn";
import { Canvas } from "./components/0_wrappers/Canvas";

function App() {
  return (
    <FlexContainerColumn className="borborder-white">
      <Canvas></Canvas>
    </FlexContainerColumn>
  );
}

export default App;
