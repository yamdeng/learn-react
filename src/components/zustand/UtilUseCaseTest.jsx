import { writeFirstStoreName } from "../../utils/CommonUtil";

export default function UtilUseCaseTest() {
  console.log("UtilUseCaseTest render");

  const handleButton = () => {
    writeFirstStoreName();
  };

  return (
    <div>
      UtilUseCaseTest test
      <p>
        <button onClick={handleButton}>writeFirstStoreName</button>
      </p>
    </div>
  );
}
