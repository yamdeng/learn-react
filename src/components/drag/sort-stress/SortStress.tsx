import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SortableStressTest } from "./SortableStressTest";

export default function SortStress() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <SortableStressTest />
      </div>
    </DndProvider>
  );
}
