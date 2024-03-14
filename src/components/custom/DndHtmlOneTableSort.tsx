import { useCallback, useState } from "react";
import { useRef } from "react";
import type { Identifier, XYCoord } from "dnd-core";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import { produce } from "immer";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { basicSimpleList } from "../../data/default-datas";

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
      // item과 monitor를 사실 동일함
      // monitor : DropTargetMonitor(https://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor)
      console.debug("hover event call test start");

      console.debug(`hover item : ${JSON.stringify(item)}`);
      console.debug(`hover monitor : ${monitor}`);
      if (!ref.current) {
        return;
      }
      const dragIndex = item.arrayIndex;
      const hoverIndex = arrayIndex;

      console.info(`dragIndex : ${dragIndex} hoverIndex : ${hoverIndex}`);

      // 같으면 아무것도 하지 않음
      if (dragIndex === hoverIndex) {
        return;
      }

      // drop(hover)가 되는 대상의 browser top을 가지고옴
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // hoverBoundingRect.top : 스크롤 기준으로 브라우저를 기준으로 얼마만큼 수직으로 떨어져있는지
      // hoverBoundingRect.bottom : hoverBoundingRect.top + hoverBoundingRect.height ===> top과 엘리먼트의 높이(즉, 엘리먼트의 최하단이 브라우저를 기준으로 얼마만큼 수직으로 떨어져있는지)
      const dropElementHeight =
        hoverBoundingRect.bottom - hoverBoundingRect.top;

      // hoverBoundingRect.height == hoverBoundingRect.bottom - hoverBoundingRect.top
      console.debug(`hoverBoundingRect.top : ${hoverBoundingRect.top}`);
      console.debug(`hoverBoundingRect.height : ${hoverBoundingRect.height}`);
      console.debug(`dropElementHeight : ${dropElementHeight}`);

      // hoverMiddleY : drop element height / 2 : drop 대상의 높이 / 2
      const hoverMiddleY = dropElementHeight / 2;

      // monitor : 대상은 드래그한 정보를 의미함
      // monitor.getClientOffset() : mouse 좌표를 의미하는데 getBoundingClientRect와 유사하며 좌표 자체가 element를 기준으로 하는지 아니면 mouse x/y를 하는지 다름
      const clientOffset = monitor.getClientOffset();
      console.debug(`clientOffset : ${JSON.stringify(clientOffset)}`);

      // drag하는 대상의 마우스 y 좌표와 - drop하는 대상의 top을 뺌 : drop 대상의 높이를 기준으로 어느 Y 좌표에 해당하는지 추출
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      console.debug(`hoverMiddleY : ${hoverMiddleY}`);
      console.debug(`hoverClientY : ${hoverClientY}`);

      // drop 대상이 아래에 있는 경우 : 마우스 Y 좌표가 엘리먼트의 /2 좌표보다 클 경우에만 move를 해야 함
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // drop 대상이 위에 있는 경우 : 마우스 Y 좌표가 엘리먼트의 /2의 좌표보다 작을 경우에만 move를 해야 함
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      console.info("moveCard call");

      moveCard(dragIndex, hoverIndex);

      // item(drag) index를 hoverIndex로 변경한다
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

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.info(
        `final dragIndex : ${dragIndex}, hoverIndex : ${hoverIndex}`
      );

      // drag를 삭제하고 현재 drag에 item을 추가하는 방법ㄴ
      setRows((prevRows: any[]) =>
        update(prevRows, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevRows[dragIndex]],
          ],
        })
      );

      // index를 switch하는 방법
      // const newRows = produce(rows, (draft) => {
      //   draft[dragIndex] = rows[hoverIndex];
      //   draft[hoverIndex] = rows[dragIndex];
      // });
      // setRows(newRows);
    },
    [rows]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ marginTop: 0 }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ height: 30 }}>
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
