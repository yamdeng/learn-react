import { useEffect } from "react";
import { create } from "zustand";
import { produce } from "immer";

const profileInitailState = {
  name: "ays",
  authList: ["R", "W"],
  deptInfo: {
    asName: "asDevelop",
    name: "develop",
  },
};

const initailState = {
  rootName: "yamdeng",
  profile: profileInitailState,
};

// profile: profileInitailState,

const useBearStore = create((set, get) => ({
  ...initailState,

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

  changeRootName: (name) => {
    set(
      produce((state) => {
        state.rootName = name + " > root";
      })
    );
    get().writeLog("changeProfileName");
  },
  clearStoreByInitData: () =>
    set(() => ({
      profile: profileInitailState,
    })),
  clearStoreByInitDataAll: () => set(() => initailState),

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
    changeRootName,
    clearStore,
    clearStoreByInitData,
    clearStoreByInitDataAll,
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
        <p>
          <button onClick={() => changeProfileName("ays777")}>
            changeProfileName
          </button>
        </p>
        <p>
          <button onClick={() => changeProfileDeptName("ower")}>
            changeProfileDeptName
          </button>
        </p>

        <p>
          <button onClick={() => changeRootName("goo eun ae love")}>
            changeRootName
          </button>
        </p>

        <p>
          <button onClick={() => clearStoreByInitData()}>
            clearStoreByInitData
          </button>
        </p>

        <p>
          <button onClick={() => clearStoreByInitDataAll()}>
            clearStoreByInitDataAll
          </button>
        </p>
      </div>
    </div>
  );
}
