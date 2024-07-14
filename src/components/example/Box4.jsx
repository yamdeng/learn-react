import { useEffect, useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});
Input.displayName = "Input";

export default function Box4() {
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
      <Input ref={inputRef} />
      <button onClick={handleFocus}>입력란 포커스2</button>
    </>
  );
}
