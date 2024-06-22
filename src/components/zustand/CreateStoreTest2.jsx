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

  return (
    <>
      createStore2test : context
      <Profile />
      <hr />
      <CreateStoreTest />
    </>
  );
}
