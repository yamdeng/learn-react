import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCallback, useState } from "react";
import { Container } from "./Container";

export default function Native() {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true);
  const toggle = useCallback(
    () => setHideSourceOnDrag(!hideSourceOnDrag),
    [hideSourceOnDrag]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Container hideSourceOnDrag={hideSourceOnDrag} />
        <p>
          <label htmlFor="hideSourceOnDrag">
            <input
              id="hideSourceOnDrag"
              type="checkbox"
              role="checkbox"
              checked={hideSourceOnDrag}
              onChange={toggle}
            />
            <small>Hide the source item while dragging</small>
          </label>
        </p>
      </div>
    </DndProvider>
  );
}
