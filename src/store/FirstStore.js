import { create } from 'zustand'

const FirstStore = create((set) => ({
  name: 'ays',
  age: 30,
  increaseAge: () => set((state) => ({ age: state.age + 1 })),
  changeName: (newName) => set((state) => ({ ...state, name: newName })),
  changeAge: (newAge) => set((state) => ({ ...state, age: newAge }))
}))

export default FirstStore