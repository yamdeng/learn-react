import { create } from "zustand";

const useBearStore = create((set) => ({
  profile: {
    name: "ays",
    authList: ["R", "W"],
    deptInfo: {
      name: "develop",
    },
  },
  changeProfileName: (newName) =>
    set((state) => ({
      profile: { ...state.profile, name: newName },
    })),
  changeProfileDeptName: (newDeptName) =>
    set((state) => ({
      profile: {
        ...state.profile,
        deptInfo: { ...state.deptInfo, name: newDeptName },
      },
    })),
}));

export default function MergeTest() {
  console.log("MergeTest render");

  const profile = useBearStore((state) => state.profile);
  const changeProfileName = useBearStore((state) => state.changeProfileName);
  const changeProfileDeptName = useBearStore(
    (state) => state.changeProfileDeptName
  );

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
