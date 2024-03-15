import type { CSSProperties, FC } from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};

export interface BoxProps {
  name: string;
}

interface DropResult {
  name: string;
}

export const Box: FC<BoxProps> = function Box({ name }) {
  const [{ isDragging, handlerId }, drag] = useDrag(() => ({
    type: ItemTypes.BOX + '',
    item: { name, test : 'aaa' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      console.debug(`item : ${JSON.stringify(item)}`)
      console.debug(`dropResult : ${JSON.stringify(dropResult)}`)
      if (item && dropResult) {
        console.debug(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => {
      return {        
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }
    },
  }));

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={handlerId}>
      {name}
    </div>
  );
};
