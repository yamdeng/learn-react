import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";

const useMeals = create((set, get) => ({
  papaBear: "large porridge-pot",
  mamaBear: "middle-size porridge pot",
  littleBear: "A little, small, wee pot",
  age1: 10,
  age2: 20,
  profile: {
    name: "yamdeng",
    auth: "READ",
  },
  changeAge1: (newAge) => set(() => ({ age1: newAge })),
  changeProfileAuth: (newAuth) =>
    set((state) => ({ profile: { ...state.profile, auth: newAuth } })),
  getProfileAuth: () => {
    const profile = get().profile;
    const auth = profile.auth;
    return auth;
  },
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

  // 다음과 같이 useShallow를 대입할당 방식으로 사용할 수 있음 : object case
  const { nuts, honey } = useMeals(
    useShallow((state) => ({ nuts: state.papaBear, honey: state.mamaBear }))
  );

  // 다음과 같이 useShallow를 대입할당 방식으로 사용할 수 있음 : array case
  const [nuts2, honey2] = useMeals(
    useShallow((state) => [state.papaBear, state.mamaBear])
  );

  return (
    <div>
      <p>ageTotal: {ageTotal}</p>
      <p>nuts : {nuts}</p>
      <p>honey : {honey}</p>
      <p>nuts2 : {nuts2}</p>
      <p>honey2 : {honey2}</p>
    </div>
  );
};

const BearProfile = () => {
  console.log("BearProfile render");

  // 아래의 경우로 할 경우 적용 안됨
  // const getProfileAuth = useMeals((state) => state.getProfileAuth);
  // const profileAuth = getProfileAuth();

  // 아래의 방식으로 사용하면 auth가 당연히 변경됨
  // const profile = useMeals((state) => state.profile);

  const profileAuth = useMeals(
    useShallow((state) => (state.profile ? state.profile.auth : "NONE"))
  );
  return (
    <div>
      profileAuth : {profileAuth}
      {/* <p>profile : {JSON.stringify(profile)}</p> */}
    </div>
  );
};

export default function UseShallowTest() {
  console.log("UseShallowTest render");
  const changeAge1 = useMeals((state) => state.changeAge1);
  const changeProfileAuth = useMeals((state) => state.changeProfileAuth);

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
        <br />
        <button onClick={() => changeProfileAuth("WRITE")}>
          changeProfileAuth
        </button>
      </p>
      <p>ageSuperTotal : {ageSuperTotal}</p>
      <div>
        <BearNames />
        <BearAges />
        <BearProfile />
      </div>
    </div>
  );
}
