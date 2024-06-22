import { useEffect } from "react";
import { useStore } from "zustand";
import useTestStore2 from "../../store/useTestStore2";
import CreateStoreTest from "./CreateStoreTest";

const Profile = function Profile() {
  console.log("Profile Component Render");
  const changeProfile = useStore(useTestStore2, (state) => state.changeProfile);
  const profile = useStore(useTestStore2, (state) => state.profile);

  return (
    <div>
      <p>profile : {profile ? JSON.stringify(profile) : "not profile"}</p>
      <button onClick={() => changeProfile({ name: "ays222" })}>
        changeProfile
      </button>
    </div>
  );
};

export default function CreateStoreTest2() {
  console.log("CreateStoreTest2 render");
  const name = useStore(useTestStore2, (state) => state.name);
  const changeName = useStore(useTestStore2, (state) => state.changeName);
  const clearStore1 = useStore(useTestStore2, (state) => state.clearStore1);
  const clearStore2 = useStore(useTestStore2, (state) => state.clearStore2);
  console.log(`clearStore1 : ${clearStore1}`);
  console.log(`clearStore2 : ${clearStore2}`);
  useEffect(() => {
    return clearStore2();
  }, []);

  return (
    <>
      createStore2test : context
      <p>name : {name}</p>
      <p>
        <button onClick={() => changeName("yongseong")}>changeName</button>
      </p>
      <Profile />
      <hr />
      <CreateStoreTest />
    </>
  );
}
