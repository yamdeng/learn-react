import type { CSSProperties, FC } from "react";
import { useDrop } from "react-dnd";

import { ItemTypes } from "./ItemTypes";

const style: CSSProperties = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

export const Dustbin: FC = () => {
  const [{ canDrop, isOver, dropItemType, dropItem }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item: any) => {
      item.addProps = "add";
      item.name = item.name + "ss";
      return item;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      dropItemType: monitor.getItemType(),
      dropItem: monitor.getItem(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  console.log("======================== start ========================");
  console.log(new Date());
  console.log(`isOver : ${isOver}`);
  console.log(`canDrop : ${canDrop}`);
  console.log(dropItemType);
  console.log(dropItem);
  console.log("======================== end ========================");

  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};
