import useFirstStore from "../../store/useFirstStore";

export default function StoreFirstChildTest() {
  console.log("StoreFirstChildTest render");

  const { name, changeName, age, changeAge } = useFirstStore();

  return (
    <div>
      StoreFirstChildTest test
      <br />
      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>
        <button onClick={() => changeName("ays2")}>changeName</button>
      </p>
      <p>
        <button onClick={() => changeAge(28)}>changeAge</button>
      </p>
    </div>
  );
}
