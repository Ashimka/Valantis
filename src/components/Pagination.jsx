import { useSearchParams } from "react-router-dom";

const Pagination = ({ currentPage, setCurrentPage, limit }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePrevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    setSearchParams({ page: currentPage - 1, limit });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setSearchParams({ page: currentPage + 1, limit });
  };

  return (
    <>
      <div className="pagination">
        <button
          className="pagination-btn"
          disabled={searchParams.size === 0 ? true : false}
          onClick={handlePrevPage}
        >
          &larr;
        </button>
        <button className="pagination-btn" onClick={handleNextPage}>
          &rarr;
        </button>
      </div>
    </>
  );
};
export default Pagination;
