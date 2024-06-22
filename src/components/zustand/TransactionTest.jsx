import { create } from "zustand";

const initailState = {
  currentPage: 1,
  pageSize: 10,
  list: [],
  searchParam: {},
};

const list1 = ["aaa"];
const list2 = ["bbb", "ccc"];

const useListStore = create((set, get) => ({
  ...initailState,

  changeCurrentPage1: (page) => {
    set({ currentPage: page });
    get().search();
  },

  changePageSize: (pageSize) => {
    set({ pageSize: pageSize });
    get().search();
  },

  changeCurrentPage2: (page) => {
    set({ currentPage: page });
    get().changePageSize(20);
  },

  search: () =>
    set((state) => ({ list: state.list.length > 1 ? list1 : list2 })),
}));

export default function TransactionTest() {
  console.log("TransactionTest render");

  const {
    currentPage,
    pageSize,
    list,
    changeCurrentPage1,
    changePageSize,
    changeCurrentPage2,
    search,
  } = useListStore();

  return (
    <div>
      <p>currentPage {currentPage}</p>
      <p>pageSize {pageSize}</p>
      <p>list {JSON.stringify(list)}</p>
      <p>
        <button onClick={() => changeCurrentPage1(2)}>
          changeCurrentPage1
        </button>
      </p>
      <p>
        <button onClick={() => changePageSize(50)}>changePageSize</button>
      </p>
      <p>
        <button onClick={() => changeCurrentPage2(99)}>
          changeCurrentPage2
        </button>
      </p>
      <p>
        <button onClick={search}>saerch</button>
      </p>
    </div>
  );
}
