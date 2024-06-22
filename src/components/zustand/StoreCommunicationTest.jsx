import StoreFirstChildTest from "./StoreFirstChildTest";
import StoreSecondChildTest from "./StoreSecondChildTest";

export default function StoreCommunicationTest() {
  console.log("StoreCommunicationTest render");

  return (
    <div>
      StoreCommunicationTest test
      <StoreFirstChildTest />
      <StoreSecondChildTest />
    </div>
  );
}
