import type { FC, ReactNode } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Frame, { FrameContextConsumer } from "react-frame-component";
import { Box } from "./Box";
import { Dustbin } from "./Dustbin";

const FrameBindingContext: FC<{ children?: ReactNode }> = ({ children }) => (
  <FrameContextConsumer>
    {({ window }: any) => (
      <DndProvider backend={HTML5Backend} context={window}>
        {children}
      </DndProvider>
    )}
  </FrameContextConsumer>
);
export default function WithIframe() {
  return (
    <Frame style={{ width: "100%", height: 400 }}>
      <FrameBindingContext>
        <div>
          <div style={{ overflow: "hidden", clear: "both" }}>
            <Dustbin />
          </div>
          <div style={{ overflow: "hidden", clear: "both" }}>
            <Box name="Glass" />
            <Box name="Banana" />
            <Box name="Paper" />
          </div>
        </div>
      </FrameBindingContext>
    </Frame>
  );
}
