import { create } from "zustand";
import { createListSlice } from "../../store/slice/commonSlice";

// const useUserListStore = create((...a) => ({
//   ...createListSlice(...a),
// }));

// slice argument 직접 사용하기
// const useUserListStore = create((set, get) => ({
//   ...createListSlice(set, get),
//   changePageSize: (pageSize) => {
//     alert(pageSize);
//     set({ pageSize: pageSize, currentPage: 1 });
//     get().search();
//   },
// }));

const useUserListStore = create((set, get) => ({
  ...createListSlice(set, get),
  currentPage: 20,
  changePageSize: (pageSize) => {
    alert(pageSize);
    set({ pageSize: pageSize, currentPage: 1 });
    get().search();
  },
}));

export default function SliceListRefTest() {
  console.log("SliceListRefTest render");

  const {
    currentPage,
    pageSize,
    changeCurrentPage,
    changePageSize,
    list,
    search,
  } = useUserListStore();

  console.log(`currentPage : ${currentPage}`);

  return (
    <div>
      <p>SliceListRefTest</p>
      <p>currentPage {currentPage}</p>
      <p>pageSize {pageSize}</p>
      <p>list {JSON.stringify(list)}</p>
      <p>
        <button onClick={() => changeCurrentPage(2)}>changeCurrentPage</button>
      </p>
      <p>
        <button onClick={() => changePageSize(50)}>changePageSize</button>
      </p>
      <p>
        <button onClick={search}>saerch</button>
      </p>
    </div>
  );
}
