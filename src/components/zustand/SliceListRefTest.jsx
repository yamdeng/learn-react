import { create } from "zustand";
import { createListSlice } from "../../store/slice/commonSlice";

const useUserListStore = create((...a) => ({
  ...createListSlice(...a),
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
