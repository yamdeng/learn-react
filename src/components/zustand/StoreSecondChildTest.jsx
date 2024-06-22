import useSecondStore from "../../store/useSecondStore";

export default function StoreSecondChildTest() {
  console.log("StoreSecondChildTest render");

  const { name, changeName, age, changeAge } = useSecondStore();

  return (
    <div>
      StoreSecondChildTest test
      <br />
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>
        <button onClick={() => changeName("ays2-second")}>changeName</button>
      </p>
      <p>
        <button onClick={() => changeAge(18)}>changeAge</button>
      </p>
    </div>
  );
}
