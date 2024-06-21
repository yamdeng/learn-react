import { create } from "zustand";

const useUIStore = create((set) => ({
  menuList: ["보고서", "감사"],
  clearMenuList: () =>
    set(() => ({
      menuList: [],
    })),
  addMenuList: (newMenu) =>
    set((state) => ({ menuList: [...state.menuList, newMenu] })),
}));

const useProfileStore = create((set) => ({
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

export default function MultipleStoreTest() {
  console.log("MultipleStoreTest render");

  const profile = useProfileStore((state) => state.profile);
  const menuList = useUIStore((state) => state.menuList);
  const clearMenuList = useUIStore((state) => state.clearMenuList);
  const addMenuList = useUIStore((state) => state.addMenuList);

  return (
    <div>
      MultipleStoreTest
      <p>profile : {JSON.stringify(profile)}</p>
      <p>menuList : {JSON.stringify(menuList)}</p>
      <button onClick={clearMenuList}>clearMenuList</button>
      <button onClick={() => addMenuList("portal")}>addMenuList</button>
    </div>
  );
}
