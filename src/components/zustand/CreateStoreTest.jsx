import { createContext, useContext } from "react";
import { useStore } from "zustand";
import useTestStore2 from "../../store/useTestStore2";

const StoreContext = createContext();

const Profile = function Profile() {
  console.log("Profile Component Render");

  const store = useContext(StoreContext);
  const changeProfile = useStore(store, (state) => state.changeProfile);
  const profile = useStore(store, (state) => state.profile);

  return (
    <div>
      <p>profile : {profile ? JSON.stringify(profile) : "not profile"}</p>
      <button onClick={() => changeProfile({ name: "ays" })}>
        changeProfile
      </button>
    </div>
  );
};

export default function CreateStoreTest() {
  console.log("CreateStoreTest render");

  return (
    <StoreContext.Provider value={useTestStore2}>
      createStore test : context
      <Profile />
    </StoreContext.Provider>
  );
}
