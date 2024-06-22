import { useEffect } from "react";
import { create } from "zustand";
import { produce } from "immer";

const initailState = {
  name: "ays",
  authList: ["R", "W"],
  deptInfo: {
    asName: "asDevelop",
    name: "develop",
  },
};

const useBearStore = create((set, get) => ({
  profile: initailState,

  writeLog: (fnName) => {
    console.log(`call function name : ${fnName}`);
    const profile = get().profile;
    console.log(`profile.name : ${profile.name}`);
  },
  changeProfileName: (newName) => {
    set(
      produce((state) => {
        state.profile.name = newName + "good";
      })
    );
    get().writeLog("changeProfileName");
  },
  changeProfileDeptName: (newDeptName) =>
    set(
      produce((state) => {
        state.profile.deptInfo.name = newDeptName + "good";
      })
    ),

  clearStoreByInitData: () =>
    set(() => ({
      profile: initailState,
    })),
  clearStore: () =>
    set(() => ({
      profile: {
        name: "test",
        authList: ["D"],
        deptInfo: {
          asName: "test",
          name: "test",
        },
      },
    })),
  clearDirect: () => {
    // useBearStore.setState({
    //   profile: null,
    // });
    useBearStore.getState().clearStore();
  },
}));

export default function ImmerTest() {
  console.log("ImmerTest render");

  const {
    profile,
    changeProfileName,
    changeProfileDeptName,
    clearStore,
    clearStoreByInitData,
    clearDirect,
  } = useBearStore();

  console.log(clearStore);
  console.log(clearDirect);
  console.log(clearStoreByInitData);

  // const profile = useBearStore((state) => state.profile);
  // const changeProfileName = useBearStore((state) => state.changeProfileName);
  // const clearStore = useBearStore((state) => state.clearStore);
  // const clearStoreByInitData = useBearStore(
  //   (state) => state.clearStoreByInitData
  // );
  // const changeProfileDeptName = useBearStore(
  //   (state) => state.changeProfileDeptName
  // );

  useEffect(() => {
    return () => clearDirect();
  }, []);

  return (
    <div>
      MergeTest
      <p>profile : {JSON.stringify(profile)}</p>
      <div>
        <button onClick={() => changeProfileName("ays777")}>
          changeProfileName
        </button>
        <button onClick={() => changeProfileDeptName("ower")}>
          changeProfileDeptName
        </button>
      </div>
    </div>
  );
}
