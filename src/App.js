import React from "react";
import { FlexContainerColumn } from "./components/0_wrappers/FlexContainerColumn";
import { Canvas } from "./components/0_wrappers/Canvas";
import { TypographyH1 } from "./components/01_Atoms/TypographyH1";

function App() {
  return (
    <FlexContainerColumn>
      <Canvas></Canvas>
      <TypographyH1>DISK</TypographyH1>
    </FlexContainerColumn>
  );
}

export default App;
