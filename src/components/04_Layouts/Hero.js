import React from "react";
import { FlexContainerColumn } from "../0_wrappers/FlexContainerColumn";
import { Canvas } from "../0_wrappers/Canvas";
import { TypographyH1 } from "../01_Atoms/TypographyH1";

export function Hero() {
  return (
    <FlexContainerColumn>
      <Canvas></Canvas>
      <TypographyH1>DISK TV</TypographyH1>
    </FlexContainerColumn>
  );
}
