import { useCallback, useState } from "react";
import { useRef } from "react";
import type { Identifier, XYCoord } from "dnd-core";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { basicSimpleList } from "../../data/default-datas";
// import { BasicRowInfo } from "../../types";

interface DragItem {
  arrayIndex: number;
  id: string;
  type: string;
}

function TableRow(props: any) {
  const { info, arrayIndex, moveCard } = props;
  // console.debug(info);
  // debugger;
  const { id, depth, category, type } = info;

  const ref = useRef<any>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ["all"],
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      console.debug("hover event call test start");
      if (!ref.current) {
        return;
      }
      const dragIndex = item.arrayIndex;
      const hoverIndex = arrayIndex;

      console.debug(
        `hover step 1 === dragIndex : ${dragIndex} hoverIndex : ${hoverIndex}`
      );

      // 같으면 아무것도 하지 않음
      if (dragIndex === hoverIndex) {
        return;
      }

      // drop(hover)가 되는 대상의 screen top을 가지고옴
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // bottom - top / 2는 현재 drop(hover) 대상 높이의 반이됨
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // (?)
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      console.debug(`hover step 2-1 hoverMiddleY : ${hoverMiddleY}`);
      console.debug(
        `hover step 2-2 clientOffset.y : ${(clientOffset as XYCoord).y}`
      );
      console.debug(`hover step 2-3 hoverClientY : ${hoverClientY}`);

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.arrayIndex = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "all",
    item: () => {
      return { id, arrayIndex };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <tr ref={ref} style={{ opacity: opacity }} data-handler-id={handlerId}>
      <td>{depth}</td>
      <td>{category}</td>
      <td>{type}</td>
      <td>
        <input type="text" placeholder="NAME" name="name" />
      </td>
      <td>
        <button className="button button-cancel">+Field</button>
        <button className="button button-cancel">+Object</button>
        <button className="button button-cancel">+List</button>
        <button className="button button-cancel">삭제</button>
      </td>
    </tr>
  );
}

export default function DndHtmlOneTableSort() {
  const [rows, setRows] = useState(basicSimpleList);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    console.info(`final dragIndex : ${dragIndex}, hoverIndex : ${hoverIndex}`);
    setRows((prevRows: any[]) =>
      update(prevRows, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevRows[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 115 }}>depth</th>
              <th style={{ width: 115 }}>구분</th>
              <th style={{ width: 115 }}>타입</th>
              <th style={{ width: 115 }}>이름</th>
              <th style={{ width: 260 }}>버튼들</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((info, index) => {
              return (
                <TableRow
                  key={info.id}
                  info={info}
                  arrayIndex={index}
                  moveCard={moveCard}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </DndProvider>
  );
}
