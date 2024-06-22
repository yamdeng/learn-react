import { create } from "zustand";
import { createListSlice } from "./slice/commonSlice";

export const useUserListStore = create((...a) => ({
  ...createListSlice(...a),
}));
