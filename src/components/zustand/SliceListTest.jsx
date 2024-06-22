import { useUserListStore } from "../../store/useUserListStore";

export default function SliceListTest() {
  console.log("SliceListTest render");

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
      <p>SliceListTest</p>
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
