import { useEffect, useRef } from "react";

export default function Box2() {
  const inputRef = useRef(null);

  console.log("Box Render");
  console.log(`inputRef.current : ${inputRef.current}`);

  function handleFocus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    console.log(`useEffect after, inputRef.current : ${inputRef.current}`);
    handleFocus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>입력란 포커스</button>
    </>
  );
}
