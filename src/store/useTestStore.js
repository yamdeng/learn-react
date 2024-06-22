import { create } from "zustand";

const useTestStore = create((set) => ({
  profile: null,
  name: "ays",
  age: 30,
  increaseAge: () => set((state) => ({ age: state.age + 1 })),
  changeName: (newName) => set(() => ({ name: newName })),
  changeName2: (newName) =>
    set((state) => {
      // return { name: newName };
      return { ...state, name: newName };
    }),

  changeName3: (newName) =>
    set((state) => {
      // return { name: newName };
      return { ...state, name: newName };
    }),
  changeAge: (newAge) => set((state) => ({ ...state, age: newAge })),
  changeProfile: (newProfile) =>
    set(() => ({
      profile: newProfile,
    })),
}));

export default useTestStore;
