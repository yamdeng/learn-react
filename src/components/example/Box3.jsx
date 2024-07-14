import { useEffect, useRef } from "react";

function Input({ ref1 }) {
  return <input type="text" ref={ref1} />;
}

export default function Box3() {
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
      <Input ref1={inputRef} />
      <button onClick={handleFocus}>입력란 포커스2</button>
    </>
  );
}
