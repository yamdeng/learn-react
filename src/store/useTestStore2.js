import { createStore } from "zustand";

const useTestStore2 = createStore((set) => ({
  profile: null,
  name: "ays",
  age: 41,
  increaseAge: () => set((state) => ({ age: state.age + 1 })),
  changeName: (newName) => set((state) => ({ ...state, name: newName })),
  changeAge: (newAge) => set((state) => ({ ...state, age: newAge })),
  changeProfile: (newProfile) =>
    set(() => ({
      profile: newProfile,
    })),
  clearStore1: () =>
    set(() => ({
      profile: null,
      name: "gea",
      age: 28,
    })),
  clearStore2: () => {
    useTestStore2.getState().clearStore1();
  },
}));

export default useTestStore2;
