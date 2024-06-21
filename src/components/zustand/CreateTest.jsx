import { memo } from "react";
import useTestStore from "../../store/useTestStore";

const Name = memo(function Name({ name }) {
  console.log("Name Component Render");
  return <p>Name Component {name}</p>;
});

const Profile = function Profile() {
  console.log("Profile Component Render");
  const changeProfile = useTestStore((state) => state.changeProfile);
  const profile = useTestStore((state) => state.profile);
  return (
    <div>
      <p>profile : {profile ? JSON.stringify(profile) : "not profile"}</p>
      <button onClick={() => changeProfile({ name: "ays" })}>
        changeProfile
      </button>
    </div>
  );
};

export default function CreateTest() {
  console.log("CreateTest render");
  // 전체 state select
  // const { name, changeName } = useTestStore();
  const name = useTestStore((state) => state.name);
  const changeName = useTestStore((state) => state.changeName);
  // const changeProfile = useTestStore((state) => state.changeProfile);
  // const profile = useTestStore((state) => state.profile);

  const age = useTestStore((state) => state.age);
  const changeAge = useTestStore((state) => state.changeAge);

  return (
    <div>
      create test
      <p>age : {age}</p>
      <Name name={name} />
      <Profile />
      <div>
        <button onClick={() => changeName("ays17")}>changeName</button>
        <button onClick={() => changeAge(41)}>changeAge</button>
        {/* <button onClick={() => changeProfile({ name: "profileName" })}>
          changeProfile
        </button> */}
      </div>
    </div>
  );
}
