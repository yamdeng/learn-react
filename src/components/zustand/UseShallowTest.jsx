import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useMeals = create((set) => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
  age1: 10,
  age2: 20,
  changeAge1: (newAge) => set(() => ({ age1: newAge })),
}));

const BearNames = () => {
  console.log("BearNames render");
  // const names = useMeals((state) => Object.keys(state));

  // 아래의 코드 적용시 render가 되지 않음
  const names = useMeals(useShallow((state) => Object.keys(state)));

  return <div>{names.join(", ")}</div>;
};

const BearAges = () => {
  console.log("BearAges render");

  // computed 방식으로 사용할 수 있음
  const ageTotal = useMeals(
    useShallow((state) => {
      return state.age1 + state.age2;
    })
  );

  return <div>{ageTotal}</div>;
};

export default function UseShallowTest() {
  console.log("UseShallowTest render");
  const changeAge1 = useMeals((state) => state.changeAge1);

  const ageSuperTotal = useMeals((state) => state.age1 + state.age2 + 100);

  const chaneKey = () => {
    useMeals.setState({
      papaBear: "a large pizza",
    });
  };

  return (
    <div>
      UseShallowTest test
      <p>
        <button onClick={chaneKey}>change key</button>
        <br />
        <button onClick={() => changeAge1(200)}>changeAge1</button>
      </p>
      <p>ageSuperTotal : {ageSuperTotal}</p>
      <div>
        <BearNames />
        <BearAges />
      </div>
    </div>
  );
}
