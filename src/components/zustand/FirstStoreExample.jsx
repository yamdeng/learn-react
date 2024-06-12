import FirstStore from "../../store/FirstStore";

export default function FirstStoreExample() {
  const name = FirstStore((state) => state.name)
  const age = FirstStore((state) => state.age)
  const increaseAge =FirstStore((state) => state.increaseAge) 
  const changeName = FirstStore((state) => state.changeName)
  const changeAge = FirstStore((state) => state.changeAge)

  return <div>FirstStoreExample
    <p>name : {name}</p>
    <p>age : {age}</p>
    <div>
      <button onClick={() => changeName('ays2')}>changeName</button>
      <button onClick={() => changeAge(37)}>changeAge</button>
      <button onClick={increaseAge}>increaseAge</button>      
    </div>
  </div>;
}
