import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "./Box";
import { Dustbin } from "./Dustbin";

export default function NestDragTarget() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div style={{ overflow: "hidden", clear: "both", margin: "-1rem" }}>
          <Dustbin greedy={true}>
            <Dustbin greedy={true}>
              <Dustbin greedy={true} />
            </Dustbin>
          </Dustbin>
          <Dustbin>
            <Dustbin>
              <Dustbin />
            </Dustbin>
          </Dustbin>
        </div>

        <div style={{ overflow: "hidden", clear: "both", marginTop: "1.5rem" }}>
          <Box />
        </div>
      </div>
    </DndProvider>
  );
}
