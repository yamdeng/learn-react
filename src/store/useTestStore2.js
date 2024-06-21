import { createStore, useStore } from "zustand";

const useTestStore2 = createStore((set) => ({
  profile: null,
  name: "ays",
  age: 30,
  increaseAge: () => set((state) => ({ age: state.age + 1 })),
  changeName: (newName) => set((state) => ({ ...state, name: newName })),
  changeAge: (newAge) => set((state) => ({ ...state, age: newAge })),
  changeProfile: (newProfile) =>
    set(() => ({
      profile: newProfile,
    })),
}));

export default useTestStore2;
